import { CHANNEL_NAME } from "src/Constants/index";

const ipcOnResize = (type: "zoomin" | "zoomout") => {
  window.electron.ipcRenderer.onResize(CHANNEL_NAME.ON_RESIZE, type);
}

export { ipcOnResize }