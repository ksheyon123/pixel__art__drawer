const { ipcMain, webFrame } = require("electron");

const ipcModule = (win) => {
  ipcMain.on("ON_RESIZE", async (_event, arg) => {
    console.log(arg);
    if (arg === "zoomin") {
      console.log(webFrame.getZoomFactor());
      const zoomFactor = webFrame.getZoomFactor();
    }

    if (arg === "zoomout") {
    }
  });
};

module.exports = {
  ipcModule,
};
