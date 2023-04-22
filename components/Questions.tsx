import Question from "./Question";
import { useContext, useState } from "react";
import { QuestionContext } from "@/context/question-context";
import LoadingSpinner from "./LoadingSpinner";

const Questions = () => {
  const { questions, isLoading } = useContext(QuestionContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    // const answer = event.currentTarget.value;
    // const isCorrect = questions[questionNumber].correct_answer === answer;
    // if (isCorrect) {
    //   setScore((prev) => prev + 1);
    // }
  };

  return (
    <section className="py-8 px-4 flex flex-col gap-6 max-w-[40rem] mx-auto">
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <Question
          {...questions[questionNumber]}
          number={questionNumber}
          updateScore={setScore}
          totalQuestions={questions.length}
          next={nextQuestion}
        />
      )}
    </section>
  );
};

export default Questions;
