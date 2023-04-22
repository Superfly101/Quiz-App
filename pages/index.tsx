import Settings from "@/components/Settings";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <section className="py-8 px-4 flex flex-col items-center">
        <Heading>Quiz App</Heading>
        <Settings />
      </section>
    </main>
  );
}
