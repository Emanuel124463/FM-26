const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;
let loadingWindow;

const rendererDir = path.join(__dirname, '..', 'renderer');
const assetsDir = path.join(__dirname, '..', 'assets');
const iconPath = path.join(assetsDir, 'icons', 'fm_career_2026.ico');

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    frame: false,
    resizable: false,
    center: true,
    backgroundColor: '#050a12',
    icon: iconPath,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  loadingWindow.loadFile(path.join(rendererDir, 'screens', 'loading.html'));
  loadingWindow.once('ready-to-show', () => loadingWindow.show());
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#081017',
    autoHideMenuBar: true,
    title: 'FM Career 2026',
    icon: iconPath,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile(path.join(rendererDir, 'index.html'));

  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      if (loadingWindow && !loadingWindow.isDestroyed()) loadingWindow.close();
      if (mainWindow && !mainWindow.isDestroyed()) mainWindow.show();
    }, 2800);
  });
}

app.whenReady().then(() => {
  createLoadingWindow();
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
