import React from "react";
import { StyledButton } from "./styled-button";

interface IProps {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<IProps> = ({ name, onClick, disabled }) => {

  return (
    <StyledButton
      disabled={disabled}
      onClick={() => onClick()}
    >
      {name}
    </StyledButton>
  )
}

export { Button } 