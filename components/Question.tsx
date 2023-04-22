import { Question } from "@/models/Question";
import { Heading, Text, Button, Stack } from "@chakra-ui/react";
import { decode } from "html-entities";
import { useEffect, useState } from "react";

type CompProp = Question;

const Question = ({
  question,
  number,
  correct_answer,
  incorrect_answers,
  onClick,
}: CompProp) => {
  const [options, setOptions] = useState<string[]>([]);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
  };

  useEffect(() => {
    if (incorrect_answers) {
      let answers = [...incorrect_answers];
      answers.splice(getRandomInt(incorrect_answers.length), 0, correct_answer);
      setOptions(answers);
    }
  }, [incorrect_answers]);

  return (
    <Stack spacing="4">
      <Heading size="lg" textAlign="center">
        Question {number + 1}
      </Heading>
      <Text size="lg">{decode(question)}</Text>

      <Stack w="full">
        {options.map((option, index) => (
          <Button key={index} colorScheme="blue" variant="outline">
            {decode(option)}
          </Button>
        ))}
      </Stack>

      <Button onClick={onClick} colorScheme="blue">
        Next
      </Button>
    </Stack>
  );
};
export default Question;
