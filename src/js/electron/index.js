const {app, BrowserWindow, contextBridge, dialog, protocol, ipcMain, ipcRenderer, globalShortcut, Menu, Notification, Tray, shell} = require('electron')
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

  ipcMain.on('open_post-one',     () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/one.html')})
  ipcMain.on('open_post-two',     () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/two.html')})
  ipcMain.on('open_post-three',   () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/three.html')})
  ipcMain.on('open_post-four',    () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/four.html')})
  ipcMain.on('open_post-five',    () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/five.html')})
  ipcMain.on('open_post-six',     () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/six.html')})
  ipcMain.on('open_post-seven',   () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/seven.html')})
  ipcMain.on('open_post-eight',   () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/eight.html')})
  ipcMain.on('open_post-nine',    () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/nine.html')})
  ipcMain.on('open_post-ten',     () => {shell.openExternal('https://scripts.korbsstudio.com/falix-software/news/ten.html')})

  mainWindow.once('ready-to-show', () => {splashWindow.destroy(); mainWindow.show()});

  autoUpdater.on('update-available', (info) => {showNotification();})
  autoUpdater.on('error', (err) => {showNotificationFailed();})
  autoUpdater.checkForUpdates()

  function showNotification() {new Notification({ title: "Falix Software", body: 'A new updating is downloading in the background...' }).show()}
  function showNotificationFailed() {new Notification({ title: "Falix Software", body: 'Update failed to download.' }).show()}

  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    setTimeout(() => {
      const dialogOpts = {
        type: 'question',
        buttons: ['Restart Now', 'Later'],
        title: 'Falix Software Updater',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new update is ready!'
      }
      dialog.showMessageBox(dialogOpts).then((returnValue) => {if (returnValue.response === 0) autoUpdater.quitAndInstall(false)})
    }, 4000)
  })
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

function quitApp() {}

app.whenReady().then(() => {createWindow()})