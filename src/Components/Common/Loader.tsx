import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Loader: React.FC = () => {
  return (
    <StyledView>
      <Dots />
    </StyledView>
  )
}

const Dots: React.FC = () => {
  const [dots, setDots] = useState<string>("...")

  useEffect(() => {
    let maxDots = 3;
    const timerId = setInterval(() => {
      setDots((prev: string) => {
        const len = prev.length;
        const curDots = len < maxDots ? prev + "." : "";
        return curDots;
      })
    }, 300);
    return () => clearInterval(timerId);
  }, []);

  return (
    <StyledLoadText>
      Loading{dots}
    </StyledLoadText>
  )
}

const StyledLoadText = styled.div`

`;

const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;

export { Loader }