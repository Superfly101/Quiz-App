import Header from "@/components/Header";
import AnswerProvider from "@/context/answer-context";
import QuestionProvider from "@/context/question-context";
import "@/styles/globals.css";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QuestionProvider>
        <AnswerProvider>
          <Header>
            <Component {...pageProps} />
          </Header>
        </AnswerProvider>
      </QuestionProvider>
    </ChakraProvider>
  );
}
