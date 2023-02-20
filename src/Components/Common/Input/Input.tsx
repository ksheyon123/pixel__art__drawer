import React, { useState } from "react";
import { useValidateInput } from "src/Hooks/useValidateInput";
import { StyledWrapper } from "./styled-input";

const Input: React.FC = () => {

  const [userInput, setUserInput] = useState<string>("");
  const { validate } = useValidateInput();
  const handleOnChange = (val: string) => {

    const isValid = validate();

    setUserInput(val);
  }

  return (
    <StyledWrapper>
      <input
        onChange={(e) => handleOnChange(e.target.value)}
        value={userInput}
      />
    </StyledWrapper>
  )
}

export { Input }