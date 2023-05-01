import Questions from "@/components/Questions";
import { QuestionContext } from "@/context/question-context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const QuestionsPage = () => {
  const { questions } = useContext(QuestionContext);
  const router = useRouter();

  useEffect(() => {
    if (questions.length === 0) router.replace("/");
  }, []);

  return (
    <>
      <Head>
        <title>Questions</title>
      </Head>
      <Questions />
    </>
  );
};

export default QuestionsPage;
