import React, { useRef, RefObject, useEffect, SyntheticEvent } from "react";
import styled from "styled-components";

const PalettePage: React.FC = () => {

  const canvasEl = useRef<HTMLCanvasElement>();

  const getPosition = (e: PointerEvent) => {
    console.log(e.clientX);
    console.log(e.clientY);

  }

  const zoomInOut = (e: WheelEvent) => {
    console.log(e.deltaX)
    console.log(e.deltaY)
  }

  useEffect(() => {
    const { current } = canvasEl;
    if (current) {
      current.addEventListener("click", getPosition);
      return () => current.removeEventListener("click", getPosition);
    }
  }, []);

  return (
    <StyledView
      className="container"
      onWheel={(e: any) => zoomInOut(e)}
    >
      Canvas
      <canvas
        ref={canvasEl as RefObject<HTMLCanvasElement>} />
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 100vw;
  height: 100vh;
  & > canvas {
    width : 100%;
    height : 100%;
  }
`;


export { PalettePage } 