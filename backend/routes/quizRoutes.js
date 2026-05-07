import { Router } from "express";
import auth from "../middleware/auth.js";
import { getQuizLevels, getQuiz, submitQuiz, getAttempts, getLeaderboard } from "../controllers/quizController.js";

const router = Router();

router.get("/leaderboard", getLeaderboard);
router.get("/levels", getQuizLevels);
router.get("/", auth, getQuiz);
router.post("/submit", auth, submitQuiz);
router.get("/attempts", auth, getAttempts);

export default router;
