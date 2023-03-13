import { useCallback, RefObject } from "react";
import { useRecoilCallback } from "recoil";
import { gridPixelState } from "src/States/atom";

const useDrawCanvas = (ref: RefObject<HTMLCanvasElement>) => {
  const { current } = ref;
  const colorCanvas = useRecoilCallback(({ snapshot }) => async (e: MouseEvent) => {
    try {
      const { x, y } = await snapshot.getPromise(gridPixelState);
      const idxX = Math.floor(e.clientX / x);
      const idxY = Math.floor(e.clientY / y);
      const ctx = current.getContext("2d");
      ctx.beginPath();
      ctx.fillRect(idxX * x, idxY * y, x, y);
      ctx.stroke();
    } catch (e) {
      throw e;
    }
  }, [current]);

  const clearCanvas = useCallback(() => {
    const ctx = current.getContext("2d");
    ctx.beginPath();
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();
  }, [current]);

  return {
    colorCanvas
  }
}

export { useDrawCanvas }