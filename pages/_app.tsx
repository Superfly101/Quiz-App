import QuestionProvider from "@/context/question-context";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QuestionProvider>
        <Component {...pageProps} />
      </QuestionProvider>
    </ChakraProvider>
  );
}
