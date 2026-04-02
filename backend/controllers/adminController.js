import Attempt from "../models/Attempt.js";
import User from "../models/User.js";

export const getAllResults = async (req, res) => {
  try {
    const results = await Attempt.find()
      .populate("studentId", "name email")
      .populate("quizId", "title")
      .sort({ createdAt: -1 });

    res.json({ results });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const [totalStudents, totalAttempts, avgResult, recentAttempts] =
      await Promise.all([
        User.countDocuments({ role: "student" }),
        Attempt.countDocuments(),
        Attempt.aggregate([
          { $group: { _id: null, avgScore: { $avg: "$score" } } },
        ]),
        Attempt.find()
          .populate("studentId", "name email")
          .populate("quizId", "title")
          .sort({ createdAt: -1 })
          .limit(5),
      ]);

    const averageScore = avgResult.length > 0 ? avgResult[0].avgScore : 0;

    res.json({ totalStudents, totalAttempts, averageScore, recentAttempts });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteAttempt = async (req, res) => {
  try {
    const { attemptId } = req.params;

    const attempt = await Attempt.findByIdAndDelete(attemptId);
    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    res.json({ message: "Attempt deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getStudentResults = async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await User.findById(studentId).select("name email");
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const results = await Attempt.find({ studentId })
      .populate("quizId", "title")
      .sort({ createdAt: -1 });

    res.json({ student, results });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
