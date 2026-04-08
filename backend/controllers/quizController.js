import Quiz from "../models/Quiz.js";
import Attempt from "../models/Attempt.js";

export const getQuizLevels = async (req, res) => {
  try {
    const quizzes = await Quiz.find({}, "title difficulty questions");
    res.json(
      quizzes.map((q) => ({
        _id: q._id,
        title: q.title,
        difficulty: q.difficulty,
        questionCount: q.questions.length,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const { difficulty } = req.query;
    const filter = difficulty ? { difficulty } : {};
    const quiz = await Quiz.findOne(filter);
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      return res.status(404).json({ message: "No quiz found" });
    }

    // Randomly select 40 unique questions using Fisher-Yates shuffle
    const allQuestions = [...quiz.questions];
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
      timeLimit: quiz.timeLimit,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers, questionIds } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Get only the questions that were served to this user
    const questions = questionIds.map((id) =>
      quiz.questions.find((q) => q._id.toString() === id)
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

    const attempt = await Attempt.create({
      studentId: req.user.id,
      quizId,
      answers,
      score,
    });

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
