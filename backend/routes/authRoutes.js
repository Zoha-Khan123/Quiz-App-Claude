import { Router } from "express";
import { signup, verifyEmail, login, forgotPassword, resetPassword } from "../controllers/authController.js";

const router = Router();

router.post("/signup", signup);
router.get("/verify-email/:token", verifyEmail);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
