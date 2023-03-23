import React, { useState } from "react";
import { useValidateInput } from "src/Hooks/useValidateInput";
import { StyledInput } from "./styled-input";

interface IProps {
  width?: number;
  height?: number;
  value: string;
  handleOnChange: (e: any) => void;
  error?: string;
}

const Input: React.FC<IProps> = ({
  width = "100%",
  height = "100%",
  value,
  handleOnChange,
  error
}) => {

  return (
    <StyledInput>
      <input
        width={width}
        height={height}
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}>
      </input>
      {!!error && (
        <div className="msg-error">
          {error}
        </div>
      )}
    </StyledInput>

  )
}

export { Input }