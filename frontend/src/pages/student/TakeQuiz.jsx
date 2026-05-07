import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { useQuiz } from "../../context/QuizContext";

export default function TakeQuiz() {
  const { setQuizActive } = useQuiz();
  const [quiz, setQuiz] = useState(null);
  const [questionIds, setQuestionIds] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [noQuiz, setNoQuiz] = useState(false);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [selectedLevelDifficulty, setSelectedLevelDifficulty] = useState(null);
  const timerRef = useRef(null);
  const submittedRef = useRef(false);
  const navigate = useNavigate();

  // Fetch all quizzes on mount
  useEffect(() => {
    api.get("/quiz/levels")
      .then(({ data }) => {
        if (data.length === 0) {
          setNoQuiz(true);
        } else {
          setAllQuizzes(data);
        }
      })
      .catch((err) => {
        const status = err.response?.status;
        if (status === 401) {
          setError("Session expired. Please login again.");
        } else {
          setError(err.response?.data?.message || "Failed to load quizzes. Make sure the server is running.");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // Start quiz - fetch random 40 questions
  const startQuiz = (quizId, levelDifficulty = null) => {
    setLoading(true);
    setError("");
    setSelectedQuizId(quizId);
    setSelectedLevelDifficulty(levelDifficulty);

    let url = `/quiz?quizId=${quizId}`;
    if (levelDifficulty) {
      url += `&levelDifficulty=${levelDifficulty}`;
    }

    api.get(url)
      .then(({ data }) => {
        setQuiz(data.quiz);
        setQuestionIds(data.quiz.questions.map((q) => q._id));
        setTimeLeft(data.timeLimit || 45 * 60);
        setAnswers(data.quiz.questions.map(() => -1));
        setStarted(true);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Failed to load quiz");
      })
      .finally(() => setLoading(false));
  };

  const submitQuiz = useCallback(async (finalAnswers) => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    clearInterval(timerRef.current);
    try {
      const payload = {
        quizId: quiz._id,
        answers: finalAnswers,
        questionIds,
      };

      if (selectedLevelDifficulty) {
        payload.levelDifficulty = selectedLevelDifficulty;
      }

      const { data } = await api.post("/quiz/submit", payload);
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit quiz");
      submittedRef.current = false;
    } finally {
      setSubmitting(false);
    }
  }, [quiz, questionIds, selectedLevelDifficulty]);

  // Set quiz active state + browser warning
  useEffect(() => {
    if (started && !result) {
      setQuizActive(true);
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = "";
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    } else {
      setQuizActive(false);
    }
  }, [started, result, setQuizActive]);

  useEffect(() => {
    return () => setQuizActive(false);
  }, [setQuizActive]);

  // Timer
  useEffect(() => {
    if (!started || !quiz || result || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [started, quiz, result]);

  useEffect(() => {
    if (started && timeLeft === 0 && quiz && !result && !submittedRef.current) {
      submitQuiz(answers);
    }
  }, [started, timeLeft, quiz, result, answers, submitQuiz]);

  const selectAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[current] = optionIndex;
    setAnswers(newAnswers);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (noQuiz) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">No Quiz Available</h2>
        <p className="text-gray-400">There are no quizzes available right now. Check back later.</p>
      </div>
    );
  }

  if (error && !quiz) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
        {error}
      </div>
    );
  }

  // LANDING SCREEN - Multiple Quiz Cards
  if (!started) {
    return (
      <div className="max-w-6xl mx-auto mt-8 md:mt-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">JavaScript Quizzes</h1>
          <p className="text-gray-400">Choose a quiz to test your knowledge</p>
        </div>

        <div className="space-y-8">
          {allQuizzes.map((quiz, index) => {
            const hasLevels = quiz.levels && quiz.levels.length > 0;

            if (hasLevels) {
              // Quiz with multiple levels (Quiz 2 - Chapter 21-40)
              return (
                <div
                  key={quiz._id}
                  className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8"
                >
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Chapter 21-40 MCQs</h2>
                    <p className="text-indigo-400 font-medium text-sm mb-2">Quiz {index + 1}</p>
                    <p className="text-gray-400 text-sm">Choose your difficulty level</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {quiz.levels.map((level) => (
                      <div
                        key={level.difficulty}
                        className={`group bg-gray-900 border rounded-xl p-5 md:p-6 transition-all duration-300 hover:scale-105 ${
                          level.difficulty === "easy" ? "border-green-500/30 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20" :
                          level.difficulty === "medium" ? "border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20" :
                          "border-red-500/30 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20"
                        }`}
                      >
                        {/* Level Badge */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                            level.difficulty === "easy" ? "bg-green-500/20 text-green-400" :
                            level.difficulty === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                            "bg-red-500/20 text-red-400"
                          }`}>
                            {level.difficulty}
                          </span>
                        </div>

                        {/* Level Title */}
                        <h3 className={`text-xl font-bold mb-3 text-center transition-colors ${
                          level.difficulty === "easy" ? "text-green-400" :
                          level.difficulty === "medium" ? "text-yellow-400" :
                          "text-red-400"
                        }`}>
                          {level.difficulty.charAt(0).toUpperCase() + level.difficulty.slice(1)} Level
                        </h3>

                        {/* Stats */}
                        <div className="flex justify-center gap-3 mb-4">
                          <div className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-center">
                            <p className="text-[10px] text-gray-400 mb-1">Questions</p>
                            <p className="text-lg font-bold text-white">40</p>
                            <p className="text-[9px] text-gray-500">from {level.questionCount}</p>
                          </div>
                          <div className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-center">
                            <p className="text-[10px] text-gray-400 mb-1">Time</p>
                            <p className="text-lg font-bold text-white">{Math.floor(level.timeLimit / 60)}</p>
                            <p className="text-[9px] text-gray-500">Minutes</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-xs text-center mb-5">
                          {level.difficulty === "easy" ? "Perfect for beginners. Test your basic knowledge." :
                           level.difficulty === "medium" ? "Intermediate challenges to sharpen your skills." :
                           "Hard questions for expert developers."}
                        </p>

                        {/* Start Button */}
                        <button
                          onClick={() => startQuiz(quiz._id, level.difficulty)}
                          className={`w-full py-3 text-white font-bold rounded-xl transition-all text-sm shadow-lg ${
                            level.difficulty === "easy" ? "bg-green-600 hover:bg-green-700 shadow-green-600/30 hover:shadow-green-600/50" :
                            level.difficulty === "medium" ? "bg-yellow-600 hover:bg-yellow-700 shadow-yellow-600/30 hover:shadow-yellow-600/50" :
                            "bg-red-600 hover:bg-red-700 shadow-red-600/30 hover:shadow-red-600/50"
                          }`}
                        >
                          Start {level.difficulty.charAt(0).toUpperCase() + level.difficulty.slice(1)}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular quiz card (Quiz 1 - Chapter 1-20)
            return (
              <div
                key={quiz._id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-indigo-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Chapter 1-20 MCQs</h2>
                    <p className="text-indigo-400 font-medium text-sm mb-3">Quiz {index + 1}</p>
                    <p className="text-gray-400 text-sm mb-4">
                      40 random questions will be selected each time you take this quiz.
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center md:justify-start gap-4">
                      <div className="bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-2">
                        <p className="text-xs text-gray-400 mb-1">Questions</p>
                        <p className="text-xl font-bold text-white">40</p>
                        <p className="text-[10px] text-gray-500">from {quiz.questionCount}</p>
                      </div>
                      <div className="bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-2">
                        <p className="text-xs text-gray-400 mb-1">Time</p>
                        <p className="text-xl font-bold text-white">45</p>
                        <p className="text-[10px] text-gray-500">Minutes</p>
                      </div>
                    </div>
                  </div>

                  {/* Start Button */}
                  <button
                    onClick={() => startQuiz(quiz._id)}
                    className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition cursor-pointer text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50"
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Result screen
  if (result) {
    const percentage = result.answered > 0 ? Math.round((result.score / result.answered) * 100) : 0;
    return (
      <div className="max-w-2xl mx-auto mt-6 md:mt-12">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 text-center mb-6">
          {/* Unanswered banner */}
          {result.unanswered > 0 && (
            <div className="bg-yellow-500/10 border border-yellow-500/40 rounded-xl px-4 py-3 mb-6">
              <p className="text-yellow-400 text-sm font-medium">
                {result.unanswered} question{result.unanswered > 1 ? "s" : ""} remaining (not attempted)
              </p>
            </div>
          )}

          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-6 ${percentage >= 50 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
            {percentage}%
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            {result.unanswered > 0 ? "Time's Up!" : "Quiz Completed!"}
          </h1>

          {/* Stats grid */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 min-w-[90px]">
              <p className="text-xs text-gray-400 mb-1">Attempted</p>
              <p className="text-xl font-bold text-white">{result.answered}</p>
            </div>
            <div className="bg-gray-900 border border-green-600/30 rounded-xl px-4 py-3 min-w-[90px]">
              <p className="text-xs text-gray-400 mb-1">Correct</p>
              <p className="text-xl font-bold text-green-400">{result.score}</p>
            </div>
            <div className="bg-gray-900 border border-red-600/30 rounded-xl px-4 py-3 min-w-[90px]">
              <p className="text-xs text-gray-400 mb-1">Wrong</p>
              <p className="text-xl font-bold text-red-400">{result.answered - result.score}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Score: <span className="text-white font-semibold">{result.score}</span> / <span className="text-white font-semibold">{result.total}</span> total questions
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/student/attempts")}
              className="w-full sm:w-auto px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition cursor-pointer text-sm font-medium"
            >
              View Attempts
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition cursor-pointer text-sm font-medium"
            >
              Try Again
            </button>
          </div>
        </div>

        {/* Answer Review - only attempted questions */}
        {result.review && result.review.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Answer Review ({result.review.length} attempted)</h2>
            {result.review.map((item, i) => (
              <div key={i} className={`bg-gray-800 border rounded-xl p-4 md:p-5 ${item.isCorrect ? "border-green-600/40" : "border-red-600/40"}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.isCorrect ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                    {item.isCorrect ? "\u2713" : "\u2717"}
                  </span>
                  <p className="text-white font-medium text-sm text-left">
                    <span className="text-gray-400">Q{i + 1}.</span> {item.question}
                  </p>
                </div>
                {item.code && (
                  <pre className="bg-gray-900 border border-gray-700 rounded-lg p-3 mb-3 ml-9 text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap">
                    {item.code}
                  </pre>
                )}
                <div className="space-y-2 ml-9">
                  {item.options.map((opt, j) => {
                    const isSelected = item.selected === j;
                    const isCorrect = item.correctAnswer === j;
                    let cls = "bg-gray-900 border-gray-700 text-gray-400";
                    if (isCorrect) cls = "bg-green-600/10 border-green-600/50 text-green-400";
                    if (isSelected && !isCorrect) cls = "bg-red-600/10 border-red-600/50 text-red-400 line-through";
                    return (
                      <div key={j} className={`px-3 py-2 rounded-lg border text-sm text-left ${cls}`}>
                        <span className="font-medium mr-2">{String.fromCharCode(65 + j)}.</span>
                        {opt}
                        {isCorrect && <span className="ml-2 text-green-400 text-xs font-semibold">(Correct)</span>}
                        {isSelected && !isCorrect && <span className="ml-2 text-red-400 text-xs font-semibold">(Your Answer)</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // QUIZ SCREEN
  const question = quiz.questions[current];
  const unanswered = answers.reduce(
    (acc, a, i) => (a === -1 ? [...acc, i] : acc),
    []
  );
  const allAnswered = unanswered.length === 0;

  const handleSubmit = () => {
    if (!allAnswered) {
      setCurrent(unanswered[0]);
      return;
    }
    submitQuiz(answers);
  };

  return (
    <div>
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            {quiz.title.includes("Chapter 21 to 40") ? "Chapter 21-40" : quiz.title}
            {selectedLevelDifficulty && (
              <span className={`ml-2 text-base font-semibold ${
                selectedLevelDifficulty === "easy" ? "text-green-400" :
                selectedLevelDifficulty === "medium" ? "text-yellow-400" :
                "text-red-400"
              }`}>
                - {selectedLevelDifficulty.charAt(0).toUpperCase() + selectedLevelDifficulty.slice(1)}
              </span>
            )}
          </h1>
        </div>
        <div className={`px-4 py-2 rounded-lg font-mono text-base sm:text-lg font-bold self-start sm:self-auto ${timeLeft <= 60 ? "bg-red-500/20 text-red-400 animate-pulse" : "bg-gray-800 text-white"}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all"
          style={{ width: `${((current + 1) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 mb-6">
        <p className="text-sm text-gray-400 mb-2">
          Question {current + 1} of {quiz.questions.length}
        </p>
        <h2 className="text-lg text-white font-medium mb-3">{question.question}</h2>

        {question.code && (
          <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap">
            {question.code}
          </pre>
        )}

        <div className="space-y-3">
          {question.options.map((opt, i) => {
            const isSelected = answers[current] === i;
            return (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600/20 border-indigo-500 text-white"
                    : "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-500"
                }`}
              >
                <span
                  className={`inline-block w-6 h-6 text-center text-sm leading-6 mr-3 rounded-full ${
                    isSelected ? "bg-indigo-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {isSelected ? "" : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {quiz.questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-10 h-10 md:w-9 md:h-9 rounded-lg text-sm font-medium transition cursor-pointer ${
              i === current
                ? "bg-indigo-600 text-white"
                : answers[i] !== -1
                ? "bg-green-600/30 text-green-400 border border-green-600/50"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrent((p) => Math.max(0, p - 1))}
          disabled={current === 0}
          className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg transition cursor-pointer text-sm font-medium"
        >
          Previous
        </button>

        {current === quiz.questions.length - 1 ? (
          <div className="flex items-center gap-2 sm:gap-3">
            {!allAnswered && (
              <span className="text-yellow-400 text-sm">{unanswered.length} unanswered</span>
            )}
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className={`px-4 sm:px-6 py-2.5 text-white rounded-lg transition cursor-pointer text-sm font-bold ${allAnswered ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-500"} disabled:opacity-50`}
            >
              {submitting ? "Submitting..." : allAnswered ? "Submit Quiz" : "Go to Unanswered"}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setCurrent((p) => Math.min(quiz.questions.length - 1, p + 1))}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition cursor-pointer text-sm font-medium"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
