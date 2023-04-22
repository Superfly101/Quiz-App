import useAxios from "@/hooks/useAxios";
import Question from "./Question";

type QuestionsProp = {
  apiUrl: string;
};

const Questions = ({ apiUrl }: QuestionsProp) => {
  // const apiUrl = "/api.php?amount=10";
  const { response, isLoading } = useAxios({ url: apiUrl });
  console.log(response);
  return (
    <section className="py-8 px-4 flex flex-col gap-6 max-w-[40rem] mx-auto">
      <Question />
    </section>
  );
};

export default Questions;
