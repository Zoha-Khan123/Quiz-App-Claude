import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStats = () => {
    setLoading(true);
    api.get("/admin/stats")
      .then(({ data }) => setStats(data))
      .catch((err) => setError(err.response?.data?.message || "Failed to load stats"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchStats(); }, []);

  const handleDelete = async (attemptId) => {
    if (!window.confirm("Are you sure you want to delete this quiz record?")) return;
    try {
      await api.delete(`/admin/attempt/${attemptId}`);
      fetchStats();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete record");
    }
  };

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
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-400 mb-1">Total Students</p>
          <p className="text-3xl font-bold text-white">{stats.totalStudents}</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-400 mb-1">Total Attempts</p>
          <p className="text-3xl font-bold text-white">{stats.totalAttempts}</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <p className="text-sm text-gray-400 mb-1">Average Score</p>
          <p className="text-3xl font-bold text-white">
            {stats.averageScore != null ? stats.averageScore.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Recent Attempts</h2>
          <Link to="/admin/results" className="text-sm text-indigo-400 hover:text-indigo-300">
            View all
          </Link>
        </div>

        {stats.recentAttempts.length === 0 ? (
          <p className="px-6 py-8 text-gray-500 text-center">No attempts yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 text-left border-b border-gray-700">
                  <th className="px-6 py-3 font-medium">Student</th>
                  <th className="px-6 py-3 font-medium">Quiz</th>
                  <th className="px-6 py-3 font-medium">Score</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentAttempts.map((a) => (
                  <tr key={a._id} className="border-b border-gray-700/50 hover:bg-gray-750">
                    <td className="px-6 py-3">
                      <Link
                        to={`/admin/results/student/${a.studentId?._id}`}
                        className="text-indigo-400 hover:text-indigo-300"
                      >
                        {a.studentId?.name || "Unknown"}
                      </Link>
                    </td>
                    <td className="px-6 py-3 text-gray-300">{a.quizId?.title || "Deleted Quiz"}</td>
                    <td className="px-6 py-3 text-white font-medium">{a.score}</td>
                    <td className="px-6 py-3 text-gray-400">{new Date(a.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleDelete(a._id)}
                        className="text-red-400 hover:text-red-300 transition cursor-pointer"
                        title="Delete this record"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
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
