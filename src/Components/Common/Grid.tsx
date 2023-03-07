import React, { useRef, RefObject, useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { gridPixelState } from "src/States/atom";

const Grid: React.FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>();
  const { x, y } = useRecoilValue(gridPixelState);

  const drawGrid = useCallback(() => {
    const { current } = canvasEl;
    if (current) {
      const ctx = current.getContext("2d");
      const gapX = 800 / x;
      const gapY = 800 / y;
      ctx.beginPath();
      ctx.lineWidth = 1;
      for (let i = 0; i < 800 / x; i++) {
        ctx.moveTo(i * gapX, 0);
        ctx.lineTo(i * gapX, 800);
      }
      for (let j = 0; j < 800 / y; j++) {
        ctx.moveTo(0, j * gapY);
        ctx.lineTo(800, j * gapY);
      }
      ctx.stroke();

    }
  }, [canvasEl, x, y]);

  useEffect(() => {
    drawGrid();
  }, [canvasEl, x, y]);

  return (
    <StyledCanvas
      ref={canvasEl as RefObject<HTMLCanvasElement>}
    />
  )
}

const StyledCanvas = styled.canvas`
position : absolute;
  width : 100%;
  height : 100%;
  pointer-events: none;
  top : 0px;
`;

export { Grid }