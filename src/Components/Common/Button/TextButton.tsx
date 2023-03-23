import React from "react";
import styled from "styled-components";
import { StyledTextButton } from "./styled-button";

interface IProps {
  name: string;
  handleOnClick: () => void;
}

const TextButton: React.FC<IProps> = ({
  name,
  handleOnClick
}) => {
  return (
    <StyledTextButton onClick={() => handleOnClick()}>
      {name}
    </StyledTextButton >
  )
}

export { TextButton }