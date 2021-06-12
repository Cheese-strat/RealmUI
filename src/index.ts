import { BrowserWindow, ipcMain, app } from "electron";
async function createWindow() {
	const win = new BrowserWindow({
		width: 1600,
		height: 700,

		webPreferences: {
			nodeIntegration: true,
		},
		fullscreen: false,
		autoHideMenuBar: true,
	});
	win.loadFile("html/loading.html");
	await sleep(10);
	win.webContents.session;
	win.loadFile("html/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
app.name = "RealmUI";
async function sleep(time: number) {
	return new Promise(r => setTimeout(r, time * 1000));
}
