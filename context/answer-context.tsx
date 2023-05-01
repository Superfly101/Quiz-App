import { createContext, useState } from "react";

type Prop = {
  children: React.ReactNode;
};

type Answer = {
  question: string;
  answer: string;
  options: string[];
  correctAnswer: string;
};

type ContextType = {
  score: number;
  userAnswers: Answer[];
  incrementScore: () => void;
  addAnswer: (answer: Answer) => void;
  resetStates: () => void;
};

export const AnswerContext = createContext<ContextType>({} as ContextType);

const AnswerProvider = ({ children }: Prop) => {
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  const incrementScore = () => {
    setScore((prev) => prev + 1);
  };

  const addAnswer = (answer: Answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  };

  const resetStates = () => {
    setUserAnswers([]);
    setScore(0);
  };

  const contextValue = {
    score,
    userAnswers,
    incrementScore,
    addAnswer,
    resetStates,
  };

  return (
    <AnswerContext.Provider value={contextValue}>
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerProvider;
