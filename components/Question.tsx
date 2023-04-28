// import { Question } from "@/models/Question";
import { AnswerContext } from "@/context/answer-context";
import {
  Heading,
  Text,
  Button,
  Stack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { decode } from "html-entities";
import { useContext, useEffect, useState } from "react";

type Prop = {
  question: string;
  number: number;
  totalQuestions: number;
  correct_answer: string;
  incorrect_answers: string[];
  next: () => void;
};

const Question = ({
  question,
  number,
  totalQuestions,
  correct_answer,
  incorrect_answers,
  next,
}: Prop) => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const { incrementScore, addAnswer } = useContext(AnswerContext);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const handleClick = () => {
    if (value) {
      const isCorrect = correct_answer === value;
      if (isCorrect) incrementScore();
      addAnswer({
        question,
        answer: value,
        // isCorrect,
        options: options,
        correctAnswer: correct_answer,
      });
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
        <Stack w="full" spacing="3">
          {options.map((option, index) => (
            <Radio value={option} key={index} colorScheme="blue">
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
