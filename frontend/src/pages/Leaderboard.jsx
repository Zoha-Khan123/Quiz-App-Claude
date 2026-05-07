import { useState, useEffect } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await api.get("/quiz/leaderboard");
        setLeaders(res.data);
      } catch (err) {
        console.error("Failed to fetch leaderboard", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leaderboard</h1>
          <p className="text-gray-400">Top performers across all quizzes.</p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="h-20 bg-gray-900 animate-pulse rounded-2xl border border-gray-800" />
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-800/50 border-b border-gray-800">
                    <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-right">Total Score</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-right">Avg Score</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-right">Attempts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {leaders.map((leader, index) => (
                    <tr key={leader._id} className="hover:bg-gray-800/50 transition-colors group">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            index === 0 ? "bg-yellow-500 text-black" :
                            index === 1 ? "bg-gray-300 text-black" :
                            index === 2 ? "bg-amber-600 text-white" :
                            "bg-gray-800 text-gray-400"
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">
                            {leader.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-white group-hover:text-indigo-400 transition-colors">{leader.name}</p>
                            <p className="text-xs text-gray-500">MERN Developer</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-right font-mono font-bold text-indigo-400">{leader.totalScore}</td>
                      <td className="px-6 py-6 text-right text-gray-300">{leader.averageScore.toFixed(1)}</td>
                      <td className="px-6 py-6 text-right text-gray-300">{leader.totalAttempts}</td>
                    </tr>
                  ))}
                  {leaders.length === 0 && (
                    <tr>
                      <td colSpan="5" className="px-6 py-20 text-center text-gray-500 italic">
                        No records found yet. Be the first to take a quiz!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-12 p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Ready to join the elite?</h3>
            <p className="text-indigo-300/80">Take a quiz now and see your name on the board.</p>
          </div>
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all whitespace-nowrap">
            Take a Quiz
          </button>
        </div>
      </main>

      <footer className="py-12 border-t border-gray-900 bg-gray-950 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 QuizMaster. Built with MERN Stack.
          </p>
        </div>
      </footer>
    </div>
  );
}
