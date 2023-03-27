import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface IProps {
  rndMnemonic: string[]
  selectedMnemonic: string[];
  selectMnemonic: Dispatch<SetStateAction<any[]>>;
}

const MnemonicMatchForm: React.FC<IProps> = ({ rndMnemonic, selectedMnemonic, selectMnemonic }) => {

  return (
    <StyledView>
      <div className="mnemonic-list">
        {rndMnemonic.map((el) => {
          return (
            <div className="mnemonic-item" onClick={() => {
              selectMnemonic(prev => [...prev, el])
            }}>
              {el}
            </div>
          )
        })}
      </div>
      <div className="mnemonic-selected">
        {selectedMnemonic.map((el) => {
          return (
            <div className="mnemonic-item">
              {el}
            </div>
          )
        })}
      </div>
    </StyledView>
  )
}

const StyledView = styled.div`
  & > div.mnemonic-list {
    display: inline;
    & > div.mnemonic-item {
      display: inline-block;
      padding : 4px 8px;
      border-radius: 4px;

    }
  }
  & > div.mnemonic-selected {

  }
`;

export { MnemonicMatchForm }