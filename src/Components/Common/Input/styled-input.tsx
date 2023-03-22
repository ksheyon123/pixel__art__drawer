import styled from "styled-components";
import { theme } from "src/Styles/theme";

type UIProps = {
  width?: number;
  height?: number;
}

const StyledInput = styled.div.attrs(({ width, height }: UIProps) => ({
  width,
  height
}))`
  width :${({ width }) => !!width ? width : "100%"}; 
  height :${({ height }) => !!height ? height : "100%"}; 
  border : none;
  background-color : transparent;
  & > input {
    width : 100%;
    height : 100%;
    padding :10px 5px;
    &:focus {
      outline: none;
    }
    &:disabled {
      
    }
  }
`;

export { StyledInput } 