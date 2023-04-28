import Question from "./Question";
import { useContext, useState } from "react";
import { QuestionContext } from "@/context/question-context";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/react";

const Questions = () => {
  const { questions } = useContext(QuestionContext);
  const [questionNumber, setQuestionNumber] = useState(0);

  const router = useRouter();

  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      router.push("/score");
    }
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <section className="py-8 px-4 flex flex-col gap-6 max-w-[40rem] mx-auto">
      <Question
        {...questions[questionNumber]}
        number={questionNumber}
        totalQuestions={questions.length}
        next={nextQuestion}
      />

      <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
        Return to Settings
      </Link>
    </section>
  );
};

export default Questions;
