import SelectField from "./SelectField";
import { Button, Box, Spinner } from "@chakra-ui/react";
import NumberField from "./NumberField";
import useAxios from "@/hooks/useAxios";
import { difficultyOptions, typeOptions } from "@/models/Option";
import { useState } from "react";

const Settings = () => {
  const { response, error, isLoading } = useAxios({ url: "/api_category.php" });
  const initState = {
    amount: "10",
    category: "",
    difficulty: "",
    type: "",
  };
  const [formData, setFormData] = useState(initState);

  const apiUrl = "/api.php?amount=10";
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
    console.log(formData);
  };
  return (
    <section className="w-full max-w-[40rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <SelectField
          label="Category"
          options={response.trivia_categories}
          formData={formData}
          setFormData={setFormData}
        />
        <SelectField
          label="Difficulty"
          options={difficultyOptions}
          formData={formData}
          setFormData={setFormData}
        />
        <SelectField
          label="Type"
          options={typeOptions}
          formData={formData}
          setFormData={setFormData}
        />
        <NumberField formData={formData} setFormData={setFormData} />
        <Button w="full" colorScheme="blue" type="submit">
          Get Started
        </Button>
      </form>
    </section>
  );
};

export default Settings;
