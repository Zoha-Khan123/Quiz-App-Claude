import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly, studentOnly }) {
  const { user, isAdmin } = useAuth();

  // Not logged in → login page
  if (!user) return <Navigate to="/login" replace />;

  // Student trying to access admin routes
  if (adminOnly && !isAdmin) return <Navigate to="/student/quiz" replace />;

  // Admin trying to access student routes
  if (studentOnly && isAdmin) return <Navigate to="/admin/dashboard" replace />;

  return children;
}
