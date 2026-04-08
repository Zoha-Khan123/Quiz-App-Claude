import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function AllResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/admin/results")
      .then(({ data }) => setResults(data.results))
      .catch((err) => setError(err.response?.data?.message || "Failed to load results"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (attemptId) => {
    if (!window.confirm("Are you sure you want to delete this quiz record?")) return;
    try {
      await api.delete(`/admin/attempt/${attemptId}`);
      setResults((prev) => prev.filter((r) => r._id !== attemptId));
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
      <h1 className="text-2xl font-bold text-white mb-6">All Quiz Results</h1>

      <div className="bg-gray-800 border border-gray-700 rounded-xl">
        {results.length === 0 ? (
          <p className="px-6 py-8 text-gray-500 text-center">No results found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-gray-400 text-left border-b border-gray-700">
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium hidden md:table-cell">#</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Student</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium hidden md:table-cell">Email</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Quiz</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Score</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Date</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Time</th>
                  <th className="px-3 py-2 md:px-6 md:py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={r._id} className="border-b border-gray-700/50 hover:bg-gray-750">
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-500 hidden md:table-cell">{i + 1}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3">
                      <Link
                        to={`/admin/results/student/${r.studentId?._id}`}
                        className="text-indigo-400 hover:text-indigo-300"
                      >
                        {r.studentId?.name || "Unknown"}
                      </Link>
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-400 hidden md:table-cell">{r.studentId?.email || "-"}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-300">{r.quizId?.title || "Deleted Quiz"}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-white font-medium">{r.score}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-400">{new Date(r.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3 text-gray-400">{new Date(r.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}</td>
                    <td className="px-3 py-2 md:px-6 md:py-3">
                      <button
                        onClick={() => handleDelete(r._id)}
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
