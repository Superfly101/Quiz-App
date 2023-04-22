import SelectField from "./SelectField";
import { Button, Box, Spinner } from "@chakra-ui/react";
import NumberField from "./NumberField";
import useAxios from "@/hooks/useAxios";
import { difficultyOptions, typeOptions } from "@/models/Option";
import { useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { QuestionContext } from "@/context/question-context";
import { useRouter } from "next/router";

const Settings = () => {
  const { response, error, isLoading } = useAxios({ url: "/api_category.php" });

  const initState = {
    amount: "10",
    category: "",
    difficulty: "",
    type: "",
  };
  const [formData, setFormData] = useState(initState);
  const { amount, category, difficulty, type } = formData;
  const { dispatch } = useContext(QuestionContext);

  const apiUrl = `/api.php?amount=${amount}${
    category
      ? difficulty
        ? type
          ? `&category=${category}&difficulty=${difficulty}&type=${type}`
          : `&category=${category}&difficulty=${difficulty}`
        : `&category=${category}`
      : ""
  }`;
  const questionsResponse = useAxios({ url: apiUrl });

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/questions");

    dispatch({
      type: "GET_QUESTIONS",
      payload: questionsResponse.response.results,
    });
    dispatch({ type: "SET_LOADING", payload: questionsResponse.isLoading });
  };
  if (error) {
    return (
      <h2 className="font-bold text-lg text-red">
        Oops! Something went wrong.
      </h2>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="w-full max-w-[40rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <SelectField
          label="Category"
          options={response.trivia_categories}
          formData={formData}
          setFormData={setFormData}
        />
        <SelectField
          label="Difficulty"
          options={difficultyOptions}
          formData={formData}
          setFormData={setFormData}
        />
        <SelectField
          label="Type"
          options={typeOptions}
          formData={formData}
          setFormData={setFormData}
        />
        <NumberField formData={formData} setFormData={setFormData} />
        <Button w="full" colorScheme="blue" type="submit">
          Get Started
        </Button>
      </form>
    </section>
  );
};

export default Settings;
