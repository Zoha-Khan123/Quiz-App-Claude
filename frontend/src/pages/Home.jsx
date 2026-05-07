import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await api.get("/quiz/levels");
        setQuizzes(res.data);
      } catch (err) {
        console.error("Failed to fetch quizzes", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Master the MERN Stack <br /> with Interactive Quizzes
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Test your knowledge in MongoDB, Express, React, and Node.js. 
            Level up your skills and climb the leaderboard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/25"
            >
              Get Started for Free
            </Link>
            <Link
              to="/leaderboard"
              className="px-8 py-4 bg-gray-900 border border-gray-800 hover:border-gray-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
            >
              View Leaderboard
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-900 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Quizzes", value: "20+" },
              { label: "Questions", value: "500+" },
              { label: "Active Students", value: "1k+" },
              { label: "Success Rate", value: "85%" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quizzes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Available Quizzes</h2>
              <p className="text-gray-400">Choose a category and start testing your knowledge.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/student/quiz"
              className="group bg-gradient-to-br from-indigo-600 to-purple-700 border border-indigo-500/50 rounded-3xl p-8 md:p-12 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 max-w-2xl w-full"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  JavaScript Quizzes
                </h3>
                <p className="text-indigo-100 text-lg mb-6">
                  Test your JavaScript knowledge with multiple quizzes and difficulty levels
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                    <p className="text-sm text-indigo-200 mb-1">Total Quizzes</p>
                    <p className="text-2xl font-bold text-white">2</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                    <p className="text-sm text-indigo-200 mb-1">Questions</p>
                    <p className="text-2xl font-bold text-white">200+</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                    <p className="text-sm text-indigo-200 mb-1">Levels</p>
                    <p className="text-2xl font-bold text-white">4</p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex items-center justify-center gap-2 text-white font-bold text-lg group-hover:gap-4 transition-all">
                  <span>Start Learning</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 QuizMaster. Built with MERN Stack.
          </p>
        </div>
      </footer>
    </div>
  );
}
