import SelectField from "./SelectField";
import { Button, Box, Spinner } from "@chakra-ui/react";
import NumberField from "./NumberField";
import useAxios from "@/hooks/useAxios";
import { Category } from "@/models/Category";
import { difficultyOptions, typeOptions } from "@/models/Option";

const Settings = () => {
  const { response, error, isLoading } = useAxios({ url: "/api_category.php" });
  if (isLoading) {
    return (
      <Box mt="7rem">
        <Spinner speed="0.5s" thickness="4px" color="blue.500" size="xl" />;
      </Box>
    );
  }

  if (error) {
    return (
      <h2 className="font-bold text-lg text-red">
        Oops! Something went wrong.
      </h2>
    );
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <section className="w-full max-w-[40rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <SelectField label="Category" options={response.trivia_categories} />
        <SelectField label="Difficulty" options={difficultyOptions} />
        <SelectField label="Type" options={typeOptions} />
        <NumberField />
        <Button w="full" colorScheme="blue">
          Get Started
        </Button>
      </form>
    </section>
  );
};

export default Settings;
