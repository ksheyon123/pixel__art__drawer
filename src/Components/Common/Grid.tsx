import React, { useRef, RefObject, useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { gridPixelState } from "src/States/atom";

const Grid: React.FC = () => {
  const canvasEl = useRef<HTMLCanvasElement>();

  // Cell 1 width & height;
  const { x, y } = useRecoilValue(gridPixelState);

  const drawGrid = useCallback(() => {
    const { current } = canvasEl;
    if (current) {
      const ctx = current.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = 1;
      for (let i = 0; i < 800 / x; i++) {
        ctx.moveTo(i * x, 0);
        ctx.lineTo(i * y, 800);
      }
      for (let j = 0; j < 800 / y; j++) {
        ctx.moveTo(0, j * x);
        ctx.lineTo(800, j * y);
      }
      ctx.stroke();
    }
  }, [canvasEl, x, y]);

  useEffect(() => {
    drawGrid();
  }, [canvasEl, x, y]);

  return (
    <StyledCanvas
      width={800}
      height={800}
      ref={canvasEl as RefObject<HTMLCanvasElement>}
    />
  )
}

const StyledCanvas = styled.canvas`
position : absolute;
  pointer-events: none;
  top : 0px;
`;

export { Grid }