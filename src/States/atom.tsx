import { atom } from "recoil";

const gridPixelState = atom<{ x: number; y: number; }>({
  key: "gridPixelState",
  default: {
    x: 100,
    y: 100
  }
});

const cellSizeState = atom<number>({
  key: "cellSizeState",
  default: 0
})

export { gridPixelState, cellSizeState }