import Questions from "@/components/Questions";
import { QuestionContext } from "@/context/question-context";
import { useRouter } from "next/router";
import { useContext } from "react";

const QuestionsPage = () => {
  const { questions } = useContext(QuestionContext);
  const router = useRouter();

  if (questions.length === 0) {
    router.push("/");
  }

  return <Questions />;
};

export default QuestionsPage;
