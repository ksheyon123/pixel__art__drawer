const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
  });

  win.loadURL("http://127.0.0.1:3000");
  return win;
};

app.whenReady().then(() => {
  win = createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit(); // exit
  }
});

// when application is activated, open default window
app.on("activate", () => {
  // if (BrowserWindow.getAllWindows().length === 0) {
  //   createWindow(); // open default window
  // }
});
