import { AnswerContext } from "@/context/answer-context";
import { QuestionContext } from "@/context/question-context";
import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { decode } from "html-entities";
import Answer from "./Answer";

const Score = () => {
  const { score, userAnswers } = useContext(AnswerContext);
  const { questions } = useContext(QuestionContext);

  return (
    <section className="py-8 px-4 max-w-[40rem] mx-auto">
      <Heading size="lg" textAlign="center">
        Congrats on Completing the quiz
      </Heading>

      <Text mt="10">
        You scored: {score} / {userAnswers.length}
      </Text>

      <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
        Return to Settings
      </Link>
      <div className="p-4 flex flex-col gap-4">
        <Heading size="md">Review Answers</Heading>
        <Stack spacing="1.5rem">
          {userAnswers.map((answer, index) => (
            <Answer key={index} index={index} {...answer} />
          ))}
        </Stack>
      </div>
    </section>
  );
};

export default Score;
