const {app, BrowserWindow}  = require('electron');
const glasstron             = require('glasstron');
const getGlobal             = require('./global.js');
const getOSDetection        = require('./operating-system.js');
const getDialogs            = require('./auto-update/dialogs.js');
const getAutoUpdater        = require('./auto-update/auto-updater.js');
const getGamePanelNW        = require('./new-window/game-panel.js');
const getClientPanelNW      = require('./new-window/control-panel.js');
const getArticleViewNW      = require('./new-window/article-view.js');
const getGlasstronDemNW     = require('./new-window/glasstron-demo.js');
const path                  = require('path');

function createWindow() {
  const mainWindow = new glasstron.BrowserWindow({
    width: 1250,
    height: 800,
    minWidth: 1080,
    minHeight: 520,
    frame: global.frame,
    show: true,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    blur: true,
    blurType: global.blur,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
      webviewTag: true,
      devTools: global.devMode
    }
  })

  const splashWindow = new glasstron.BrowserWindow({
    frame: false,
    show: false,
    minimizable: false,
    maximizable: false,
    skipTaskbar: true,
    center: true,
    width: 700,
    height: 184,
    resizable: false,
    blur: true,
    blurType: global.blur,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
      devTools: global.devMode
    }
  })

  mainWindow.loadFile('src/index.html')
}

app.whenReady().then(() => {createWindow()})