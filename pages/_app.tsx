import AnswerProvider from "@/context/answer-context";
import QuestionProvider from "@/context/question-context";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QuestionProvider>
        <AnswerProvider>
          <Component {...pageProps} />
        </AnswerProvider>
      </QuestionProvider>
    </ChakraProvider>
  );
}
