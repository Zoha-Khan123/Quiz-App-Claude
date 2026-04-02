import express from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getAllResults,
  getDashboardStats,
  getStudentResults,
  deleteAttempt,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/results", auth, admin, getAllResults);
router.get("/stats", auth, admin, getDashboardStats);
router.get("/results/student/:studentId", auth, admin, getStudentResults);
router.delete("/attempt/:attemptId", auth, admin, deleteAttempt);

export default router;
