import { Heading, Text } from "@chakra-ui/react";

const Score = () => {
  return (
    <section className="py-8 px-4 max-w-[40rem] mx-auto">
      <Heading size="lg" textAlign="center">
        Congrats on Completing the quiz
      </Heading>

      <Text mt="10">You scored: </Text>
    </section>
  );
};

export default Score;
