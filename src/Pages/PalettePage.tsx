import React, { useRef, RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";

const PalettePage: React.FC = () => {

  const divEl = useRef<HTMLDivElement>();
  const [ratio, setRatio] = useState<number>(1);
  const [coord, setCoord] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })
  const startToDrag = (e: PointerEvent) => {
    const { current } = divEl;
    const elemRect = current.getBoundingClientRect();
    const coordX = e.clientX - elemRect.left;
    const coordY = e.clientY - elemRect.top;
    console.log("start", coordX, coordY)
    setCoord({
      x: coordX,
      y: coordY,
    })
  }

  const endToDrag = (e: PointerEvent) => {
    const { current } = divEl;
    const elemRect = current.getBoundingClientRect();
    const coordX = e.clientX - elemRect.left;
    const coordY = e.clientY - elemRect.top;
    console.log("end", coordX, coordY)
    setCoord({
      x: coordX,
      y: coordY,
    })
  }

  const zoomInOut = (e: any) => {
    setRatio(ratio => (ratio >= 0.2 ? ratio + 0.01 * e.deltaY : 0.2));
  }

  useEffect(() => {
    const { current } = divEl;
    if (current) {
      current.addEventListener("mousedown", startToDrag);
      current.addEventListener("mouseup", endToDrag)
      return () => {
        current.removeEventListener("mousedown", startToDrag);
        current.addEventListener("mouseup", endToDrag)
      }
    }
  }, []);
  const _ratio = Math.floor(ratio * 100) / 100;
  return (
    <StyledView
      className="container"
      ref={divEl as RefObject<HTMLDivElement>}
    >
      <StyledCanvas
        ratio={_ratio}
        onWheel={(e) => zoomInOut(e)}
      />
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

const StyledCanvas = styled.canvas.attrs(({ ratio }: any) => ({
  ratio,
}))`
  position : absolute;
  width: 800px;
  height: 800px;
  background-color : ${theme.mono6};
  transform-origin: 50% 50%;
  transform: scale(${props => props.ratio});
`;


export { PalettePage } 