import { RefObject } from "react";

export default class Canvas {
  constructor(props: RefObject<HTMLCanvasElement>) {
    const { current } = props;
    this.ctx = current.getContext("2d");
  }
  public ctx: CanvasRenderingContext2D | null;

  /* 마우스 x, y 좌표 **/
  public getCoordOnCanvas = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    return { clientX, clientY }
  }


  public colorCanvas = (e: MouseEvent) => {
    const { clientX, clientY } = this.getCoordOnCanvas(e);

  }


  public static convertCoordIntoIdx = () => {

  }

  public clearCanvas = (x: number, y: number) => {
    this.ctx.clearRect(0, 0, x, y);
  }
}