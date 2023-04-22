import Question from "./Question";
import { useContext, useState } from "react";
import { QuestionContext } from "@/context/question-context";
import LoadingSpinner from "./LoadingSpinner";
import { useRouter } from "next/router";

const Questions = () => {
  const { questions, isLoading } = useContext(QuestionContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const router = useRouter();

  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      router.push("/score");
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
          totalQuestions={questions.length}
          next={nextQuestion}
        />
      )}
    </section>
  );
};

export default Questions;
