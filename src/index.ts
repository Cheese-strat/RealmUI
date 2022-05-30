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
	/*
	creating a transition requires for the scenes to be the same on ending and starting frames before calling window.location.href=""
	*/
	win.loadFile("html/loading.html");
	await sleep(10);
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
