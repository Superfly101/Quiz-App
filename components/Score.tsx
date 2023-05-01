import { AnswerContext } from "@/context/answer-context";
import { QuestionContext } from "@/context/question-context";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Answer from "./Answer";

const Score = () => {
  const { score, userAnswers } = useContext(AnswerContext);
  const { dispatch } = useContext(QuestionContext);
  useEffect(() => {
    dispatch({ type: "GET_QUESTIONS", payload: [] });
  }, []);

  return (
    <section className="py-8 px-4 max-w-[40rem] mx-auto">
      <Heading size="lg" textAlign="center" fontWeight="semibold">
        Congrats on Completing the quiz
      </Heading>

      <Text mt="10">
        You scored: {score} / {userAnswers.length}
      </Text>

      <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
        Return to Settings
      </Link>
      <div className="p-4 flex flex-col gap-4">
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Heading size="sm" fontWeight="semibold">
                Review Answers
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Stack spacing="1.5rem">
                {userAnswers.map((answer, index) => (
                  <Answer key={index} index={index} {...answer} />
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Score;
