import React from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";

interface IProps {
  mnemonic: string[];
}

const MnemonicDisplay: React.FC<IProps> = ({ mnemonic }) => {
  return (
    <StyledView>
      {mnemonic.map((el) => {
        return (
          <div className="mnemonic-item">
            {el}
          </div>
        )
      })}
    </StyledView>
  )
}

const StyledView = styled.div`
  display: inline;
  & > div.mnemonic-item {
    display: inline-block;
    padding : 4px 8px;
    border-radius: 4px;
    background-color: ${theme.mono4};
    margin-right : 10px;
    &:last-of-type {
      margin-right : 0px;
    }
  }
`;

export { MnemonicDisplay }