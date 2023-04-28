import { Stack } from "@chakra-ui/react";
import { decode } from "html-entities";

type Prop = {
  index: number;
  question: string;
  options: string[];
  correctAnswer: string;
  answer: string;
};

const Answer = ({ index, question, options, correctAnswer, answer }: Prop) => {
  return (
    <Stack spacing=".5rem">
      <p>
        {index + 1}. {decode(question)}
      </p>
      <Stack>
        {options.map((option, index) => (
          <button
            key={index}
            disabled
            className={`p-2 border rounded-lg font-semibold ${
              option === correctAnswer
                ? "border-green text-green bg-lightGreen"
                : option === answer
                ? "border-red text-red bg-lightRed"
                : "border-blue text-blue"
            }`}
          >
            {decode(option)}
          </button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Answer;
