import React, { useRef, RefObject, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { gridPixelState } from "src/States/atom";
import { Grid } from "src/Components/index";
import { useDrawCanvas } from "src/Hooks/useDrawCanvas";
import { ipcOnResize } from "src/Interface/ipc";
import { theme } from "src/Styles/theme";

const create2DArr = (rows: number, cols: number) => {
  let arr: any[][] = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = "";
    }
  }
  return arr;
}

const update2DArr = (arr: any[][], rows: number, cols: number, data: any) => {
  let tempArr: any[][] = arr;
  arr.forEach((row: any[], rowIdx: number) => {
    return row.forEach((_col: any, colIdx: number) => {
      if (rowIdx === rows && colIdx === cols) {
        tempArr[colIdx][rowIdx] = data;
      } else {
        tempArr[colIdx][rowIdx] = tempArr[colIdx][rowIdx];
      }
    });
  });
  return tempArr;
}

const CanvasPage: React.FC = () => {

  const divEl = useRef<HTMLDivElement>();
  const canvasEl = useRef<HTMLCanvasElement>();
  const [isShowGrid, setIsShowGrid] = useState<boolean>(false);
  const [twoDimensionArr, setTwoDimensionArr] = useState<string[][]>(create2DArr(8, 8));
  const [isStartToDraw, setIsStartToDraw] = useState<boolean>(false);

  const { colorCanvas, clearCanvas } = useDrawCanvas(canvasEl);

  const startToDrag = useCallback(() => {
    setIsStartToDraw(true);
  }, []);

  const draw = useCallback((e: PointerEvent) => {
    if (isStartToDraw) {
      colorCanvas(e);
    }
  }, [isStartToDraw]);

  const endToDrag = useCallback(() => {
    setIsStartToDraw(false);
  }, []);

  const zoomInOut = (e: any) => {
    // setRatio(ratio => (ratio >= 0.2 ? ratio + 0.01 * e.deltaY : 0.2));
    // ipcOnResize("zoomin");

  }

  const getCoordinate = useRecoilCallback(({ snapshot }) => async (e: MouseEvent) => {
    try {
      const { x, y } = await snapshot.getPromise(gridPixelState);
      const idxX = Math.floor(e.clientX / x);
      const idxY = Math.floor(e.clientY / y);
      const returnArr = update2DArr(twoDimensionArr, idxX, idxY, "rgba(1, 1, 1)");
      setTwoDimensionArr(returnArr);
    } catch (e) {
      throw e;
    }
  }, [twoDimensionArr]);

  useEffect(() => {
    const { current } = canvasEl;
    if (current) {
      current.addEventListener("click", getCoordinate);
      return () => current.removeEventListener("click", getCoordinate);
    }
  }, []);

  useEffect(() => {
    const { current } = divEl;
    if (current) {
      current.addEventListener("mousedown", startToDrag);
      current.addEventListener("mousemove", draw);
      current.addEventListener("mouseup", endToDrag);
      return () => {
        current.removeEventListener("mousedown", startToDrag);
        current.removeEventListener("mousemove", draw)
        current.addEventListener("mouseup", endToDrag)
      }
    }
  }, [isStartToDraw]);


  const _ratio = Math.floor(1 * 100) / 100;
  return (
    <StyledView
      className="container"
      ref={divEl as RefObject<HTMLDivElement>}
      onWheel={(e) => zoomInOut(e)}
    >
      <StyledScaleIndicator ratio={_ratio} />
      <StyledCanvasWrapper
        className="wrapper draggable"
        ratio={1}
      >
        <StyledCanvas
          width={800}
          height={800}
          ref={canvasEl as RefObject<HTMLCanvasElement>}
          onClick={(e: any) => colorCanvas(e)}
        />
        {isShowGrid && (
          <Grid />
        )}
      </StyledCanvasWrapper>
      <StyledPalette>
        <div className="palette">
          <div onClick={() => {
            setIsShowGrid(!isShowGrid);
          }}>
            Show Grid
          </div>
          <div onClick={() => {
            clearCanvas();
          }}>
            Clear Canvas
          </div>
        </div>
      </StyledPalette>
    </StyledView>
  )
}

const StyledPalette = styled.div`
  position : fixed;
  bottom : 20px;
  & > div.palette {
    border : 1px solid ${theme.mono6};
    width : 600px;
    height : 40px;
    background-color: ${theme.mono1};
  }
`;

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


export { CanvasPage } 