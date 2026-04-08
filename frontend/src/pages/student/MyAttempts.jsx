import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function MyAttempts() {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/quiz/attempts")
      .then(({ data }) => setAttempts(data))
      .catch((err) => setError(err.response?.data?.message || "Failed to load attempts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-2xl font-bold text-white">My Attempts</h1>
        <Link
          to="/student/quiz"
          className="w-full sm:w-auto text-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition"
        >
          Take Quiz
        </Link>
      </div>

      {/* Stats */}
      {attempts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Total Attempts</p>
            <p className="text-2xl font-bold text-white">{attempts.length}</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Best Score</p>
            <p className="text-2xl font-bold text-green-400">
              {Math.max(...attempts.map((a) => a.score))}
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Average Score</p>
            <p className="text-2xl font-bold text-white">
              {(attempts.reduce((s, a) => s + a.score, 0) / attempts.length).toFixed(1)}
            </p>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl">
        {attempts.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-500 mb-4">You haven't taken any quizzes yet</p>
            <Link
              to="/student/quiz"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm font-medium inline-block"
            >
              Take Your First Quiz
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-left border-b border-gray-700">
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium hidden md:table-cell">#</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Quiz</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Score</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Date</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((a, i) => (
                  <tr key={a._id} className="border-b border-gray-700/50 hover:bg-gray-750">
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-500 hidden md:table-cell">{i + 1}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-300">{a.quizId?.title || "Deleted Quiz"}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-white font-medium">{a.score}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-400">{new Date(a.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-400">{new Date(a.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
