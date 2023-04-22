// import { Question } from "@/models/Question";
import {
  Heading,
  Text,
  Button,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { decode } from "html-entities";
import { Dispatch, useEffect, useState } from "react";

type Prop = {
  question: string;
  number: number;
  totalQuestions: number;
  correct_answer: string;
  incorrect_answers: string[];
  updateScore: Dispatch<React.SetStateAction<number>>;
  next: () => void;
};

const Question = ({
  question,
  number,
  totalQuestions,
  correct_answer,
  incorrect_answers,
  updateScore,
  next,
}: Prop) => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const handleClick = () => {
    if (value) {
      const isCorrect = correct_answer === value;
      if (isCorrect) updateScore((prev) => prev + 1);
      next();
    }
  };

  useEffect(() => {
    if (incorrect_answers) {
      let answers = [...incorrect_answers];
      answers.splice(getRandomInt(incorrect_answers.length), 0, correct_answer);
      setOptions(answers);
      setValue("");
    }
  }, [incorrect_answers]);

  return (
    <Stack spacing="4">
      <Heading size="lg" textAlign="center">
        Question {number + 1} / {totalQuestions}
      </Heading>
      <Text size="lg">{decode(question)}</Text>

      <RadioGroup value={value} onChange={(e) => setValue(e)}>
        <Stack w="full">
          {options.map((option, index) => (
            <Radio
              value={option}
              key={index}
              colorScheme="blue"
              variant="outline"
            >
              {decode(option)}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>

      <Button onClick={handleClick} colorScheme="blue">
        Next
      </Button>
    </Stack>
  );
};
export default Question;
