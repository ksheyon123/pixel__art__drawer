import React, { useRef, RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";

const PalettePage: React.FC = () => {

  const divEl = useRef<HTMLDivElement>();
  const gridEl = useRef<HTMLDivElement>();
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

  const createGrid = () => {
    let count = 0;

  }

  const _ratio = Math.floor(ratio * 100) / 100;
  return (
    <StyledView
      className="container"
      ref={divEl as RefObject<HTMLDivElement>}
    >
      <StyledScaleIndicator ratio={_ratio} />
      <StyledCanvasWrapper
        className="wrapper draggable"
        ratio={_ratio}
        onWheel={(e) => zoomInOut(e)}
      >
        <StyledCanvas />
        <StyledGrid ref={gridEl as RefObject<HTMLDivElement>} />
      </StyledCanvasWrapper>
    </StyledView>
  )
}

const StyledScaleIndicator = styled.div.attrs(({ ratio }: any) => ({
  ratio,
}))`
  position : absolute;
  width : 20px;
  height : 200px;
  right : 10px;
  top : 20px;
  z-index: 100;
  border-radius: 4px;
  box-shadow : 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  background-color : ${theme.mono1};
  &:before {
    content : '${props => `${props.ratio}`}';
    position: absolute;
    bottom : 0px;
    width : 20px;
    height :${props => props.ratio * 100}px ;
    background-color : blue;
  border-radius: 4px;
    
  }
  &:after {
  }
`;

const StyledView = styled.div.attrs(({ ratio }: any) => ({
  ratio,
}))`
  position: relative;
  top: 0;
  left: 0;
  width : 100vw;
  height : 100vh;
  
`;

const StyledCanvasWrapper = styled.div.attrs(({ ratio }: any) => ({
  ratio,
}))`
  width : 100%;
  height : 100%;
  transform-origin: 50% 50%;
  transform: scale(${props => props.ratio});
`;

const StyledCanvas = styled.canvas`
  position : absolute;
  width: 800px;
  height: 800px;
  background-color : ${theme.mono6};
  
`;

const StyledGrid = styled.div`
  width : 100%;
  height : 100%;
`;


export { PalettePage } 