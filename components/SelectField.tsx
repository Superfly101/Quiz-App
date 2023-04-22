import { Category } from "@/models/Category";
import { Option } from "@/models/Option";
import { FormLabel, Select, FormControl } from "@chakra-ui/react";
import React, { Dispatch } from "react";

type SelectProp = {
  label: React.ReactNode;
  options: Category[] | Option[];
  formData: formDataType;
  setFormData: Dispatch<React.SetStateAction<formDataType>>;
};

type formDataType = {
  amount: string;
  category: string;
  difficulty: string;
  type: string;
};

const SelectField = ({ label, options, formData, setFormData }: SelectProp) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [`${label}`.toLowerCase()]: event.target.value,
    }));
  };
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select
        required
        placeholder={`Select ${label}`}
        value={formData[`${label}`.toLowerCase() as keyof formDataType]}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
