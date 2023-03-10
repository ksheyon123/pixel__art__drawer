import styled from "styled-components";
import { theme } from "src/Styles/theme";

type UIProps = {
  width?: number;
  height?: number;
}

const StyledInput = styled.input.attrs(({ width, height }: UIProps) => ({
  width,
  height
}))`
    width :${({ width }) => !!width ? width : "100%"}; 
    height :${({ height }) => !!height ? height : "100%"}; 
    border : none;
    padding :10px 5px;
    background-color : transparent;
    &:focus {
      outline: none;
    }
    &:disabled {
      
    }
`;

export { StyledInput } 