import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useQuiz } from "../context/QuizContext";

export default function StudentLayout() {
  const { user, logout } = useAuth();
  const { quizActive, setQuizActive } = useQuiz();
  const navigate = useNavigate();

  const handleNav = (e, to) => {
    if (quizActive) {
      e.preventDefault();
      const leave = window.confirm(
        "Quiz is in progress! If you leave, your quiz will be lost and you'll have to start over. Are you sure?"
      );
      if (leave) {
        setQuizActive(false);
        navigate(to);
      }
    }
  };

  const handleLogout = () => {
    if (quizActive) {
      const leave = window.confirm(
        "Quiz is in progress! If you logout, your quiz will be lost. Are you sure?"
      );
      if (!leave) return;
    }
    setQuizActive(false);
    logout();
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
      isActive ? "bg-indigo-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-gray-950 flex">
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">Quiz App</h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <NavLink to="/student/quiz" onClick={(e) => handleNav(e, "/student/quiz")} className={linkClass}>
            Take Quiz
          </NavLink>
          <NavLink to="/student/attempts" onClick={(e) => handleNav(e, "/student/attempts")} className={linkClass}>
            My Attempts
          </NavLink>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="mb-3 px-2">
            <p className="text-sm text-white font-medium truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">Student</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition text-left cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
