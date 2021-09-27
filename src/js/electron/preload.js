const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld(
  "api", {
      send: (channel, data) => {
          let validChannels = ["minimize",
                               "maximize",
                               "restore",
                               "close",
                               "update",
                               "open-update-dialog",
                               "open-sample-dialog",
                               
                               "open_post-one",
                               "open_post-two",
                               "open_post-three",
                               "open_post-four",
                               "open_post-five",
                               "open_post-six",
                               "open_post-seven",
                               "open_post-eight",
                               "open_post-nine",
                               "open_post-ten"];
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
      }
  }
);

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

setTimeout(function(){
  document.getElementById("version").innerHTML = process.env.npm_package_version;
  document.getElementById("electron-version").innerHTML = process.versions.electron;
  document.getElementById("electron-p-version").innerHTML = process.versions.electron;
  document.getElementById("node-version").innerHTML = process.versions.node;
  document.getElementById("chrome-version").innerHTML = process.versions.chrome;
}, 2500);

delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;