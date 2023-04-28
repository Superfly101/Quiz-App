import Score from "@/components/Score";
import { QuestionContext } from "@/context/question-context";
import { useRouter } from "next/router";
import { useContext, useLayoutEffect } from "react";

const ScorePage = () => {
  const { questions } = useContext(QuestionContext);
  const router = useRouter();
  useLayoutEffect(() => {
    if (questions.length === 0) router.replace("/");
  }, []);
  return <Score />;
};

export default ScorePage;
