const { app, BrowserWindow, session } = require("electron");
const isDev = require("electron-is-dev");
const { ipcModule } = require("./ipcMain");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    // show: false,
    title: "Pixel Art Drawer",
    titleBarStyle: "customButtonsOnHover",
    frame: false,
    // resizable: false,
  });

  win.loadURL("http://127.0.0.1:3000");
  win.setWindowButtonVisibility(false);
  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
  return win;
};

app.whenReady().then(() => {
  win = createWindow();
  ipcModule(win);
  // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  //   callback({
  //     responseHeaders: {
  //       ...details.responseHeaders,
  //       "Content-Security-Policy": ["default-src 'none'"],
  //     },
  //   });
  // });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit(); // exit
  }
});

// when application is activated, open default window
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow(); // open default window
  }
});
