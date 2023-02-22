import React, { ReactElement } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {

  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width : 800px;
  height : 800px;
`;

export { Layout }