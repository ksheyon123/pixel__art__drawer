const { ipcMain, BrowserWindow } = require("electron");

const ipcModule = (win) => {
  ipcMain.on("ON_RESIZE", async (_event, arg) => {});
};

module.exports = {
  ipcModule,
};
