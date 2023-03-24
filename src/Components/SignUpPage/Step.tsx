import React from "react";
import styled from "styled-components";

interface IProps {
  steps: string[];
}

const Step: React.FC<IProps> = ({ steps }) => {
  return (
    <StyledView>
      {steps.map((el: string, idx: number) => {
        return (
          <div>
            <div>
              {idx + 1}
            </div>
            <div>
              {el}
            </div>
          </div>
        )
      })}
    </StyledView>
  )
}

const StyledView = styled.div`
  display: flex;

`;

export { Step }