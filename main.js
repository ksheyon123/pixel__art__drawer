const { app, BrowserWindow, session } = require("electron");
const isDev = require("electron-is-dev");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    title: "Pixel Art Drawer",
  });

  win.loadURL("http://127.0.0.1:3000");

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
  return win;
};

app.whenReady().then(() => {
  win = createWindow();
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
