import Quiz from "../models/Quiz.js";
import Attempt from "../models/Attempt.js";

export const getQuizLevels = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});

    const result = quizzes.map((q) => {
      console.log('Processing quiz:', q.title);
      console.log('Has levels:', !!q.levels, 'Length:', q.levels?.length);

      const quizData = {
        _id: q._id,
        title: q.title,
        difficulty: q.difficulty,
        questionCount: q.questions?.length || 0,
      };

      // Add levels if they exist
      if (q.levels && q.levels.length > 0) {
        console.log('Adding levels to response');
        quizData.levels = q.levels.map(level => ({
          difficulty: level.difficulty,
          questionCount: level.questions.length,
          timeLimit: level.timeLimit
        }));
      }

      return quizData;
    });

    console.log('Final result:', JSON.stringify(result, null, 2));
    res.json(result);
  } catch (error) {
    console.error('Error in getQuizLevels:', error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const { difficulty, quizId, levelDifficulty } = req.query;
    let filter = {};

    if (quizId) {
      filter = { _id: quizId };
    } else if (difficulty) {
      filter = { difficulty };
    }

    const quiz = await Quiz.findOne(filter);
    if (!quiz) {
      return res.status(404).json({ message: "No quiz found" });
    }

    let questionsToUse = [];
    let timeLimit = quiz.timeLimit;

    // Check if quiz has levels and a specific level is requested
    if (quiz.levels && quiz.levels.length > 0 && levelDifficulty) {
      const selectedLevel = quiz.levels.find(level => level.difficulty === levelDifficulty);
      if (!selectedLevel) {
        return res.status(404).json({ message: "Level not found" });
      }
      questionsToUse = selectedLevel.questions;
      timeLimit = selectedLevel.timeLimit;
    } else if (quiz.questions && quiz.questions.length > 0) {
      questionsToUse = quiz.questions;
    } else {
      return res.status(404).json({ message: "No questions found" });
    }

    // Randomly select 40 unique questions using Fisher-Yates shuffle
    const allQuestions = [...questionsToUse];
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    const selected = allQuestions.slice(0, 40);

    // Don't send correctAnswer to the client
    const sanitizedQuestions = selected.map((q) => ({
      _id: q._id,
      question: q.question,
      code: q.code || null,
      options: q.options,
    }));

    res.json({
      quiz: {
        _id: quiz._id,
        title: quiz.title,
        questions: sanitizedQuestions,
      },
      timeLimit: timeLimit,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers, questionIds, levelDifficulty } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Determine which questions to use based on quiz structure
    let allQuestions = [];
    if (quiz.levels && quiz.levels.length > 0 && levelDifficulty) {
      // Level-based quiz
      const selectedLevel = quiz.levels.find(level => level.difficulty === levelDifficulty);
      if (!selectedLevel) {
        return res.status(404).json({ message: "Level not found" });
      }
      allQuestions = selectedLevel.questions;
    } else if (quiz.questions && quiz.questions.length > 0) {
      // Regular quiz
      allQuestions = quiz.questions;
    } else {
      return res.status(404).json({ message: "No questions found" });
    }

    // Get only the questions that were served to this user
    const questions = questionIds.map((id) =>
      allQuestions.find((q) => q._id.toString() === id)
    ).filter(Boolean);

    let score = 0;
    let answered = 0;
    questions.forEach((q, index) => {
      if (answers[index] !== -1 && answers[index] !== null && answers[index] !== undefined) {
        answered++;
        if (answers[index] === q.correctAnswer) {
          score++;
        }
      }
    });

    const unanswered = questions.length - answered;

    const attemptData = {
      studentId: req.user.id,
      quizId,
      answers,
      score,
    };

    // Add levelDifficulty if it exists
    if (levelDifficulty) {
      attemptData.levelDifficulty = levelDifficulty;
    }

    const attempt = await Attempt.create(attemptData);

    // Only include answered questions in review
    const review = [];
    questions.forEach((q, i) => {
      if (answers[i] !== -1 && answers[i] !== null && answers[i] !== undefined) {
        review.push({
          question: q.question,
          code: q.code || null,
          options: q.options,
          selected: answers[i],
          correctAnswer: q.correctAnswer,
          isCorrect: answers[i] === q.correctAnswer,
        });
      }
    });

    res.json({
      score,
      total: questions.length,
      answered,
      unanswered,
      review,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAttempts = async (req, res) => {
  try {
    const attempts = await Attempt.find({ studentId: req.user.id })
      .populate("quizId", "title")
      .sort({ createdAt: -1 });

    res.json(attempts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Attempt.aggregate([
      {
        $group: {
          _id: "$studentId",
          totalScore: { $sum: "$score" },
          averageScore: { $avg: "$score" },
          totalAttempts: { $count: {} },
          maxScore: { $max: "$score" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "student",
        },
      },
      { $unwind: "$student" },
      {
        $project: {
          _id: 1,
          totalScore: 1,
          averageScore: 1,
          totalAttempts: 1,
          maxScore: 1,
          name: "$student.name",
        },
      },
      { $sort: { totalScore: -1 } },
      { $limit: 10 },
    ]);

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
