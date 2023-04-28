import { QuestionContext } from "@/context/question-context";
import { useContext, useState } from "react";

type Prop = {
  url: string;
};

const useQuestion = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(QuestionContext);

  const fetchQuestions = async (url: string) => {
    setIsLoading(true);
    setError("");

    const response = await fetch(`https://opentdb.com/${url}`);

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      setIsLoading(false);
      setError(result);
      return;
    }

    if (result.response_code === 1) {
      setIsLoading(false);
      setError("Sorry, no questions found for the selected fields.");
      return result.response_code;
    }

    // update questions context
    dispatch({ type: "GET_QUESTIONS", payload: result.results });

    setIsLoading(false);
  };

  return { fetchQuestions, error, isLoading };
};

export default useQuestion;
