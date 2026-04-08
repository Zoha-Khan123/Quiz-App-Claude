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

    // Don't send correctAnswer to the client
    const sanitizedQuestions = quiz.questions.map((q) => ({
      _id: q._id,
      question: q.question,
      code: q.code || null,
      options: q.options,
      isMultiple: q.isMultiple || false,
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
    const { quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    let score = 0;
    quiz.questions.forEach((q, index) => {
      const correct = q.correctAnswer;
      const answer = answers[index];
      if (Array.isArray(correct)) {
        if (
          Array.isArray(answer) &&
          answer.length === correct.length &&
          [...answer].sort().join(",") === [...correct].sort().join(",")
        ) {
          score++;
        }
      } else {
        if (answer === correct) {
          score++;
        }
      }
    });

    const attempt = await Attempt.create({
      studentId: req.user.id,
      quizId,
      answers,
      score,
    });

    res.json({
      score,
      total: quiz.questions.length,
      review: quiz.questions.map((q, i) => {
        const correct = q.correctAnswer;
        const answer = answers[i];
        let isCorrect;
        if (Array.isArray(correct)) {
          isCorrect =
            Array.isArray(answer) &&
            answer.length === correct.length &&
            [...answer].sort().join(",") === [...correct].sort().join(",");
        } else {
          isCorrect = answer === correct;
        }
        return {
          question: q.question,
          code: q.code || null,
          options: q.options,
          selected: answer,
          correctAnswer: correct,
          isMultiple: q.isMultiple || false,
          isCorrect,
        };
      }),
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
