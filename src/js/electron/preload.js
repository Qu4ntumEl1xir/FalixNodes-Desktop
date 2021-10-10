const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld( "api", { send: (channel, data) => {let validChannels = [
  "launch",
  "minimize",
  "maximize",
  "restore",
  "close",
  "update",
  "open-update-dialog",
  "open-failed-dialog",
  "open-sample-dialog",
  "blurToggleOff",
  "blurToggleOn",
  "btBH",
  "btTP",
  "btAY",
  "btVB",
  "open-glasstron-api-demo"
]; if (validChannels.includes(channel)) {ipcRenderer.send(channel, data);}}});

window.addEventListener('DOMContentLoaded', () => {const replaceText = (selector, text) => {const element = document.getElementById(selector)
if (element) element.innerText = text}

for (const type of ['chrome', 'node', 'electron']) {replaceText(`${type}-version`, process.versions[type])}})
setTimeout(function(){
  document.getElementById("version").innerHTML = process.env.npm_package_version;
  document.getElementById("electron-version").innerHTML = process.versions.electron;
  document.getElementById("electron-p-version").innerHTML = process.versions.electron;
  document.getElementById("node-version").innerHTML = process.versions.node;
  document.getElementById("chrome-version").innerHTML = process.versions.chrome;
}, 7500); // In Electron 16 and newer, an error occurs if this loads too soon. Should work with the delay as 1000ms, but has been set to 7500ms just in case.

delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;