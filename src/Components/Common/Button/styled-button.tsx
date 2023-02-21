import styled from "styled-components";

const StyledButton = styled.button`
  width : 100%;
  height : 100%;
  background-color: transparent;
  border : none;
  cursor : pointer;
  &:disabled {
    cursor : default;
  }
`;

export { StyledButton }