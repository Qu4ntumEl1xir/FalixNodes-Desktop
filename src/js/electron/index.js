const {app, BrowserWindow, contextBridge, protocol, ipcMain, ipcRenderer, globalShortcut, Notification, shell} = require('electron')
const { autoUpdater } = require("electron-updater")
const { fork } = require('child_process')
const ps = fork(`${__dirname}/server.js`)
const glasstron = require('glasstron')
const electron = require('electron')
const log = require('electron-log')
const path = require('path')
const url = require('url')
const os = require("os")
autoUpdater.logger = log
global.devMode = true

let mainWindow;
let dialogUpdateAvailable;

if (process.platform == 'darwin') { 
  app.whenReady().then(() => {
    global.blur = "blurbehind"
    global.frame = false
    global.titleBarStyle = 'hiddenInset'
})}
else if(process.platform == 'win32'){ 
  app.whenReady().then(() => {
    global.blur = "blurbehind"
    global.frame = false
    global.titleBarStyle = 'hidden'
})}
else{ 
  app.whenReady().then(() => {
    global.blur = "blurbehind"
    global.frame = true
    global.titleBarStyle = 'hidden'
})}

function createWindow() {
  const mainWindow = new glasstron.BrowserWindow({
    width: 1250,
    height: 800,
    minWidth: 430,
    minHeight: 520,
    frame: global.frame,
    transparent: true,
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    blur: true,
    blurType: global.blur,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
      webviewTag: true,
      devTools: global.devMode
    }
  })

  const splashWindow = new glasstron.BrowserWindow({
    frame: false,
    minimizable: false,
    maximizable: false,
    transparent: true,
    skipTaskbar: true,
    center: true,
    width: 382,
    height: 382,
    resizable: false,
    blur: true,
    blurType: global.blur,
    webPreferences: {
      devTools: global.devMode
    }
  })

  mainWindow.loadFile('src/index.html')
  splashWindow.loadFile('src/html/splash/index.html')

  ipcMain.on('minimize',  () => {mainWindow.minimize()})
  ipcMain.on('maximize',  () => {mainWindow.maximize()})
  ipcMain.on('restore',   () => {mainWindow.restore()})
  ipcMain.on('close',     () => {mainWindow.close()})

  ipcMain.on('open-sample-dialog',     () => {(newDialogSample())})
  ipcMain.on('open-update-dialog',     () => {(newDialogUpdateAvailable())})

  mainWindow.once('ready-to-show', () => {splashWindow.destroy(); mainWindow.show()});

  autoUpdater.on('update-available', (info) => {showNotification();})
  autoUpdater.on('error', (err) => {showNotificationFailed();})
  autoUpdater.checkForUpdates()

  function showNotification() {new Notification({ title: "Falix Software", body: 'A new updating is downloading in the background...' }).show()}
  function showNotificationFailed() {new Notification({ title: "Falix Software", body: 'Update failed to download.' }).show()}

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    setTimeout(() => {
      newDialogUpdateAvailable();
    }, 4000)
  })
}

function newDialogSample() {
  const dialogSample = new BrowserWindow({
    width: 600,
    height: 250,
    frame: false,
    transparent: true,
    resizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    webPreferences: {
      devTools: global.devMode,
      preload: path.join(__dirname, "../../js/electron/preload.js"),
    }
  })
  dialogSample.loadFile('./src/html/dialogs/sample.html')

  ipcMain.on('minimize',  () => {dialogSample.minimize()})
  ipcMain.on('maximize',  () => {dialogSample.maximize()})
  ipcMain.on('restore',   () => {dialogSample.restore()})
  ipcMain.on('close',     () => {dialogSample.close()})

  ipcMain.on('dismiss',   () => {dialogSample.close();})
}

function newDialogUpdateAvailable() {
  const dialogUpdateAvailable = new BrowserWindow({
    width: 600,
    height: 250,
    frame: false,
    transparent: true,
    resizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    webPreferences: {
      devTools: global.devMode,
      preload: path.join(__dirname, "../../js/electron/preload.js"),
    }
  })
  dialogUpdateAvailable.loadFile('./src/html/dialogs/update-available.html')

  ipcMain.on('minimize',  () => {dialogUpdateAvailable.minimize()})
  ipcMain.on('maximize',  () => {dialogUpdateAvailable.maximize()})
  ipcMain.on('restore',   () => {dialogUpdateAvailable.restore()})
  ipcMain.on('close',     () => {dialogUpdateAvailable.close()})

  ipcMain.on('update',    () => {autoUpdater.quitAndInstall()})
}

function newCP() {
  const newCP = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 320,
    frame: global.frame,
    transparent: true,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
      webviewTag: true,
      devTools: global.devMode
    }
  })
  newCP.loadFile('./src/html/new-window/client.html')
}

function newGP() {
  const newCP = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 320,
    frame: global.frame,
    transparent: true,
    autoHideMenuBar: true,
    titleBarStyle: global.titleBarStyle,
    webPreferences: {
      preload: path.join(__dirname, "../../js/electron/preload.js"),
      webviewTag: true,
      devTools: global.devMode
    }
  })
  newCP.loadFile('./src/html/new-window/panel.html')
}

app.whenReady().then(() => {createWindow();})