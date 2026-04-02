import { Router } from "express";
import auth from "../middleware/auth.js";
import { getQuiz, submitQuiz, getAttempts } from "../controllers/quizController.js";

const router = Router();

router.get("/", auth, getQuiz);
router.post("/submit", auth, submitQuiz);
router.get("/attempts", auth, getAttempts);

export default router;
