import Questions from "@/components/Questions";
import { QuestionContext } from "@/context/question-context";
import { useRouter } from "next/router";
import { useContext, useLayoutEffect } from "react";

const QuestionsPage = () => {
  const { questions } = useContext(QuestionContext);
  const router = useRouter();

  useLayoutEffect(() => {
    if (questions.length === 0) router.replace("/");
  }, []);

  return <Questions />;
};

export default QuestionsPage;
