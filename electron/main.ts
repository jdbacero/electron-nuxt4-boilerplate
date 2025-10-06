const { app, BrowserWindow } = require("electron");
const path = require("path");

export const preload = path.join(__dirname, "preload.cjs");
export const url = process.env.VITE_DEV_SERVER_URL;
export const indexHtml = path.join(
  __dirname,
  "..",
  "..",
  ".output",
  "public",
  "index.html"
);

async function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload,
    },
  });

  if (url) {
    await mainWindow.loadURL(url);
    // Open devTool if the app is not packaged
    mainWindow.webContents.openDevTools();
  } else {
    await mainWindow.loadFile(indexHtml);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
