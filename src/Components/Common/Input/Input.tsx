import React, { useState } from "react";
import { useValidateInput } from "src/Hooks/useValidateInput";
import { StyledInput } from "./styled-input";

interface IProps {
  width?: number;
  height?: number;
}

const Input: React.FC<IProps> = ({
  width,
  height
}) => {

  const [userInput, setUserInput] = useState<string>("");
  const { validate } = useValidateInput();
  const handleOnChange = (val: string) => {

    const isValid = validate();

    setUserInput(val);
  }

  return (
    <StyledInput>
      <input
        width={width}
        height={height}
        onChange={(e) => handleOnChange(e.target.value)}
        value={userInput}>
      </input>
    </StyledInput>

  )
}

export { Input }