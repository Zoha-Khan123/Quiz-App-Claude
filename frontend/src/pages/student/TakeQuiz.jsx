import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { useQuiz } from "../../context/QuizContext";

export default function TakeQuiz() {
  const { setQuizActive } = useQuiz();
  const [quiz, setQuiz] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [noQuiz, setNoQuiz] = useState(false);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const timerRef = useRef(null);
  const submittedRef = useRef(false);
  const navigate = useNavigate();

  // Fetch quiz info on mount (but don't start)
  useEffect(() => {
    api.get("/quiz")
      .then(({ data }) => {
        setQuiz(data.quiz);
        setTimeLeft(45 * 60);
        setAnswers(new Array(data.quiz.questions.length).fill(-1));
      })
      .catch((err) => {
        const status = err.response?.status;
        const msg = err.response?.data?.message;
        if (status === 404) {
          setNoQuiz(true);
        } else if (status === 401) {
          setError("Session expired. Please login again.");
        } else {
          setError(msg || "Failed to load quiz. Make sure the server is running.");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const submitQuiz = useCallback(async (finalAnswers) => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    clearInterval(timerRef.current);
    try {
      const { data } = await api.post("/quiz/submit", {
        quizId: quiz._id,
        answers: finalAnswers,
      });
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit quiz");
      submittedRef.current = false;
    } finally {
      setSubmitting(false);
    }
  }, [quiz]);

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

  // Cleanup on unmount
  useEffect(() => {
    return () => setQuizActive(false);
  }, [setQuizActive]);

  // Timer only runs after started
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

  // Result screen
  if (result) {
    const percentage = Math.round((result.score / result.total) * 100);
    return (
      <div className="max-w-lg mx-auto mt-12">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-6 ${percentage >= 50 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
            {percentage}%
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h1>
          <p className="text-gray-400 mb-6">
            You scored <span className="text-white font-semibold">{result.score}</span> out of <span className="text-white font-semibold">{result.total}</span>
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate("/student/attempts")}
              className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition cursor-pointer text-sm font-medium"
            >
              View Attempts
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition cursor-pointer text-sm font-medium"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // START SCREEN — quiz loaded but not started yet
  if (!started) {
    return (
      <div className="max-w-lg mx-auto mt-12">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{quiz.title}</h1>
          <div className="flex justify-center gap-6 mt-4 mb-6">
            <div>
              <p className="text-sm text-gray-400">Questions</p>
              <p className="text-xl font-bold text-white">{quiz.questions.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Time Limit</p>
              <p className="text-xl font-bold text-white">{formatTime(timeLeft)}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Timer will start as soon as you click the button below. Make sure you are ready.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition cursor-pointer text-base"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // QUIZ SCREEN
  const question = quiz.questions[current];
  const unanswered = answers.reduce((acc, a, i) => (a === -1 ? [...acc, i] : acc), []);
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

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">{quiz.title}</h1>
        <div className={`px-4 py-2 rounded-lg font-mono text-lg font-bold ${timeLeft <= 60 ? "bg-red-500/20 text-red-400 animate-pulse" : "bg-gray-800 text-white"}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all"
          style={{ width: `${((current + 1) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
        <p className="text-sm text-gray-400 mb-2">
          Question {current + 1} of {quiz.questions.length}
        </p>
        <h2 className="text-lg text-white font-medium mb-5">{question.question}</h2>

        <div className="space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition cursor-pointer ${
                answers[current] === i
                  ? "bg-indigo-600/20 border-indigo-500 text-white"
                  : "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-500"
              }`}
            >
              <span className="inline-block w-6 h-6 text-center text-sm leading-6 rounded-full bg-gray-700 text-gray-300 mr-3">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {quiz.questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition cursor-pointer ${
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
          <div className="flex items-center gap-3">
            {!allAnswered && (
              <span className="text-yellow-400 text-sm">{unanswered.length} unanswered</span>
            )}
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className={`px-6 py-2.5 text-white rounded-lg transition cursor-pointer text-sm font-bold ${allAnswered ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-500"} disabled:opacity-50`}
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
