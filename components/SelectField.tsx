import { Category } from "@/models/Category";
import { Option } from "@/models/Option";
import { FormLabel, Select, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";

type SelectProp = {
  label: React.ReactNode;
  options: Category[] | Option[];
};

const SelectField = ({ label, options }: SelectProp) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select value={value} onChange={handleChange}>
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
