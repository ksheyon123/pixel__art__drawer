import styled from "styled-components";

const StyledInput = styled.div`
  position :relative;
  width :"100%"; 
  height : "100%"; 
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
  & > div.msg-error {
    position: absolute;
    
  }
`;

export { StyledInput } 