const { ipcRenderer } = require("electron");
ipcRenderer.on("loaded", () => {
	$("#ship").addClass("moving");
	$("#ship").removeClass("moving");
	$("#ship")[0].offsetWidth = $("#ship")[0].offsetWidth;
});
