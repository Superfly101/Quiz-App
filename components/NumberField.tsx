import {
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
} from "@chakra-ui/react";
import { Dispatch } from "react";

type formDataType = {
  amount: string;
  category: string;
  difficulty: string;
  type: string;
};

type CompProp = {
  setFormData: Dispatch<React.SetStateAction<formDataType>>;
  formData: formDataType;
};

const TextField = ({ setFormData, formData }: CompProp) => {
  const handleChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      amount: value,
    }));
  };

  return (
    <FormControl>
      <FormLabel>Amount of Questions</FormLabel>
      <NumberInput value={formData.amount} onChange={handleChange} min={0}>
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
