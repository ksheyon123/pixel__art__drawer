const electronProps = require("electron");
const { contextBridge, ipcRenderer } = electronProps;

contextBridge.exposeInMainWorld("electron", {
  loadPreferences: () => ipcRenderer.invoke("load-prefs"),

  ipcRenderer: {
    onResize: (channel, args) => {
      ipcRenderer.send(channel, args);
    },
  },
});
