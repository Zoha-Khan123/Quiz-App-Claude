import { Router } from "express";
import auth from "../middleware/auth.js";
import { getQuizLevels, getQuiz, submitQuiz, getAttempts } from "../controllers/quizController.js";

const router = Router();

router.get("/levels", auth, getQuizLevels);
router.get("/", auth, getQuiz);
router.post("/submit", auth, submitQuiz);
router.get("/attempts", auth, getAttempts);

export default router;
