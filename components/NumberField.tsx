import {
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
} from "@chakra-ui/react";

const TextField = () => {
  const handleChange = () => {};

  return (
    <FormControl>
      <FormLabel>Amount of Questions</FormLabel>
      <NumberInput defaultValue={10} min={0}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default TextField;
