import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useQuiz } from "../context/QuizContext";

export default function StudentLayout() {
  const { user, logout } = useAuth();
  const { quizActive, setQuizActive } = useQuiz();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

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
    <div className="min-h-screen bg-gray-950 flex flex-col md:flex-row">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
        <h1 className="text-lg font-bold text-white">Quiz App</h1>
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-400 hover:text-white transition cursor-pointer"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 flex flex-col transform transition-transform duration-200 ease-in-out md:static md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-6 py-5 border-b border-gray-800 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Quiz App</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 text-gray-400 hover:text-white transition cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <NavLink to="/student/quiz" onClick={(e) => { handleNav(e, "/student/quiz"); setSidebarOpen(false); }} className={linkClass}>
            Take Quiz
          </NavLink>
          <NavLink to="/student/attempts" onClick={(e) => { handleNav(e, "/student/attempts"); setSidebarOpen(false); }} className={linkClass}>
            My Attempts
          </NavLink>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="mb-3 px-2">
            <p className="text-sm text-white font-medium truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">Student</p>
          </div>
          <button
            onClick={() => { setSidebarOpen(false); handleLogout(); }}
            className="w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition text-left cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
