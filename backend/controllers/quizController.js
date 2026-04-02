import Quiz from "../models/Quiz.js";
import Attempt from "../models/Attempt.js";

export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne();
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      return res.status(404).json({ message: "No quiz found" });
    }

    // Don't send correctAnswer to the client
    const sanitizedQuestions = quiz.questions.map((q) => ({
      _id: q._id,
      question: q.question,
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
    const { quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });

    const attempt = await Attempt.create({
      studentId: req.user.id,
      quizId,
      answers,
      score,
    });

    res.json({ score, total: quiz.questions.length });
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
