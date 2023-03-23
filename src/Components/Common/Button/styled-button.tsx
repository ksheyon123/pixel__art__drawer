import styled from "styled-components";
import { theme } from "src/Styles/theme";

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

const StyledTextButton = styled(StyledButton)`
  text-decoration: underline;
  color : ${theme.mono8};
`;

export { StyledButton, StyledTextButton }