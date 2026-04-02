import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../../utils/api";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setMessage("Invalid verification link. No token found.");
      setLoading(false);
      return;
    }

    api.get(`/auth/verify-email/${token}`)
      .then(({ data }) => {
        setMessage(data.message);
        setSuccess(true);
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Verification failed. Link may be expired.");
      })
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 text-center">
        {loading ? (
          <>
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Verifying your email...</p>
          </>
        ) : (
          <>
            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${success ? "bg-green-500/20" : "bg-red-500/20"}`}>
              {success ? (
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {success ? "Email Verified!" : "Verification Failed"}
            </h1>
            <p className={`mb-6 ${success ? "text-green-400" : "text-red-400"}`}>{message}</p>
            <Link
              to="/login"
              className="inline-block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
            >
              Go to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
