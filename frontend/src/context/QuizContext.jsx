import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export function QuizProvider({ children }) {
  const [quizActive, setQuizActive] = useState(false);
  return (
    <QuizContext.Provider value={{ quizActive, setQuizActive }}>
      {children}
    </QuizContext.Provider>
  );
}
