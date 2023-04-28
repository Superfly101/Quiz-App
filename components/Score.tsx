import { AnswerContext } from "@/context/answer-context";
import { Button, Heading, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";

const Score = () => {
  const { score, userAnswers } = useContext(AnswerContext);

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
    </section>
  );
};

export default Score;
