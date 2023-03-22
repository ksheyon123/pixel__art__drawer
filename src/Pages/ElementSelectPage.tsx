import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cellSizeState } from "src/States/atom";
import { PATH } from "src/Constants/index";
import { Input } from "src/Components";

const ElementSelectPage: React.FC = () => {
  const navigate = useNavigate();
  const [cellSize, setCellSize] = useRecoilState(cellSizeState);
  return (
    <StyledPage>
      <div>
        <div>
          Insert Cell Size
        </div>
        <div>
          <Input />
        </div>
      </div>
      <div>
        <div>
          Elements
        </div>
        <div>
          Head
        </div>
        <div>
          Head Action
        </div>
        <div>
          Eyes
        </div>
        <div>
          Eyes Action
        </div>
        <div>
          Body
        </div>
        <div>
          Arm
        </div>
        <div>
          Arm Action
        </div>
      </div>
      <div onClick={() => navigate(PATH.PALETTE)}>
        Next
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  
  width : 100%;
  height : 100%;
  padding-top : 50px;
`;

export { ElementSelectPage }