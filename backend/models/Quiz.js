import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
});

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  timeLimit: {
    type: Number,
    required: true,
  },
  questions: [questionSchema],
});

export default mongoose.model("Quiz", quizSchema);
