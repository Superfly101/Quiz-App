import Settings from "@/components/Settings";
import { Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>MyQuiz</title>
      </Head>
      <section className="py-8 px-4 flex flex-col items-center">
        <Settings />
      </section>
    </main>
  );
}
