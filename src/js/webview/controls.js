webview = document.querySelector('webview')

var clientWV = document.getElementById('client-webview');

// Controls
function clientGoBack() {clientWV.goBack()};
function clientGoForward() {clientWV.goForward()};
function clientHome() {clientWV.loadURL('https://client.falixnodes.net/')};
function clientReload() {clientWV.reload()};
function clientDev() {clientWV.openDevTools()};
function clientFS() {clientWV.requestFullscreen()};