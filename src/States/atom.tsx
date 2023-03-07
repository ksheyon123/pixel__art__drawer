import { atom } from "recoil";

const gridPixelState = atom<{ x: number; y: number; }>({
  key: "gridPixelState",
  default: {
    x: 100,
    y: 100
  }
});

export { gridPixelState }