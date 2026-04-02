import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import AdminLayout from "./components/AdminLayout";
import StudentLayout from "./components/StudentLayout";
import { QuizProvider } from "./context/QuizContext";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Dashboard from "./pages/admin/Dashboard";
import AllResults from "./pages/admin/AllResults";
import StudentResults from "./pages/admin/StudentResults";
import TakeQuiz from "./pages/student/TakeQuiz";
import MyAttempts from "./pages/student/MyAttempts";

function HomeRedirect() {
  const { user, isAdmin } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (isAdmin) return <Navigate to="/admin/dashboard" replace />;
  return <Navigate to="/student/quiz" replace />;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Auth routes - only for guests (not logged in) */}
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />
        <Route path="/forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
        <Route path="/reset-password" element={<GuestRoute><ResetPassword /></GuestRoute>} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Student routes - only for students */}
        <Route
          path="/student"
          element={
            <ProtectedRoute studentOnly>
              <QuizProvider>
                <StudentLayout />
              </QuizProvider>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="quiz" replace />} />
          <Route path="quiz" element={<TakeQuiz />} />
          <Route path="attempts" element={<MyAttempts />} />
        </Route>

        {/* Admin routes - only for admins */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="results" element={<AllResults />} />
          <Route path="results/student/:studentId" element={<StudentResults />} />
        </Route>

        {/* Default */}
        <Route path="*" element={<HomeRedirect />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
