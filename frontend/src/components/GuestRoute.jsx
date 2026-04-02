import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function GuestRoute({ children }) {
  const { user, isAdmin } = useAuth();

  // Already logged in → redirect to their dashboard
  if (user) {
    return <Navigate to={isAdmin ? "/admin/dashboard" : "/student/quiz"} replace />;
  }

  return children;
}
