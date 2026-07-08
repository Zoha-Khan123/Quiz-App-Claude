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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* JavaScript Quiz Card */}
            <Link
              to="/student/quiz"
              className="group bg-gradient-to-br from-indigo-600 to-purple-700 border border-indigo-500/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  JavaScript
                </h3>
                <p className="text-indigo-100 text-base mb-6">
                  Test your JavaScript knowledge with multiple quizzes and difficulty levels
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <p className="text-xs text-indigo-200 mb-1">Quizzes</p>
                    <p className="text-2xl font-bold text-white">2</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <p className="text-xs text-indigo-200 mb-1">Questions</p>
                    <p className="text-2xl font-bold text-white">200+</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <p className="text-xs text-indigo-200 mb-1">Levels</p>
                    <p className="text-2xl font-bold text-white">4</p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex items-center justify-center gap-2 text-white font-bold text-base group-hover:gap-4 transition-all">
                  <span>Start Learning</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Python Quiz Card */}
            <Link
              to="/student/quiz"
              className="group bg-gradient-to-br from-blue-600 to-cyan-700 border border-blue-500/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4">
                  Python
                </h3>
                <p className="text-blue-100 text-base mb-6">
                  Master Python fundamentals with comprehensive quizzes covering all topics
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <p className="text-xs text-blue-200 mb-1">Quizzes</p>
                    <p className="text-2xl font-bold text-white">1</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <p className="text-xs text-blue-200 mb-1">Questions</p>
                    <p className="text-2xl font-bold text-white">70</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <p className="text-xs text-blue-200 mb-1">Topics</p>
                    <p className="text-2xl font-bold text-white">9</p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex items-center justify-center gap-2 text-white font-bold text-base group-hover:gap-4 transition-all">
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
