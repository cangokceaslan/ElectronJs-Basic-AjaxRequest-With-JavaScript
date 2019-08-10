const electron = require("electron");
const {app, BrowserWindow} = electron;
let win;
app.on("ready",function(){
    win = new BrowserWindow({
        width: 1000,
        height: 800,
    });
    win.setFullScreen(true);
    //win.setMenu(null);
    win.setMenuBarVisibility(false);
    win.loadURL("file://"+__dirname+"/index.html");
});