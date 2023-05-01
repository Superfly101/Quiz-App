import Score from "@/components/Score";
import { QuestionContext } from "@/context/question-context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const ScorePage = () => {
  const { questions } = useContext(QuestionContext);
  const router = useRouter();
  useEffect(() => {
    if (questions.length === 0) router.replace("/");
  }, []);
  return (
    <>
      <Head>
        <title>Score</title>
      </Head>
      <Score />
    </>
  );
};

export default ScorePage;
