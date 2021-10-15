console.log('\x1b[44m%s\x1b[0m', 'File has loaded: operating-system.js')
if (process.platform == 'win32') {
    global.blur = "arylic"
    global.frame = false
} else if(process.platform == 'darwin') {
    global.blur = "vibrancy"
    global.frame = false
} else if(process.platform == 'linux') {
    global.blur = "blurbehind"
    global.frame = true
}