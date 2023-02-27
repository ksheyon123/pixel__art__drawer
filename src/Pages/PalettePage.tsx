import React, { useRef, RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";

const PalettePage: React.FC = () => {

  const canvasEl = useRef<HTMLCanvasElement>();
  const [ratio, setRatio] = useState<number>(1);
  const [coord, setCoord] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })
  const getPosition = (e: PointerEvent) => {
    const { current } = canvasEl;
    const elemRect = current.getBoundingClientRect();
    const coordX = e.clientX - elemRect.left;
    const coordY = e.clientY - elemRect.top;
    console.log(coordX, coordY)
    setCoord({
      x: coordX,
      y: coordY,
    })
  }

  const zoomInOut = (e: any) => {
    console.log(e);
    setRatio(ratio => (ratio >= 0.2 ? ratio + 0.001 * e.deltaY : 0.2));
  }

  useEffect(() => {
    const { current } = canvasEl;
    if (current) {
      current.addEventListener("click", getPosition);
      return () => current.removeEventListener("click", getPosition);
    }
  }, []);

  const originX = Math.round(coord.x / 800 * 100);
  const originY = Math.round(coord.y / 800 * 100);

  return (
    <StyledView className="container" >
      <StyledCanvas
        ratio={ratio}
        x={originX}
        y={originY}
        onWheel={(e) => zoomInOut(e)}
        ref={canvasEl as RefObject<HTMLCanvasElement>} />
    </StyledView>
  )
}

const StyledView = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width : 100vw;
  height : 100vh;
`;

const StyledCanvas = styled.canvas.attrs(({ ratio, x, y }: any) => ({
  ratio,
  x,
  y
}))`
position : absolute;
  width: ${props => 800 / props.ratio}px;
  height: ${props => 800 / props.ratio}px;
  /* transform: scale(${props => props.ratio}); */
  transform-origin: ${props => props.x}% ${props => props.y}%;
  background-color : ${theme.mono6};

`;


export { PalettePage } 