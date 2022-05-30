
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');


var submenu = new Menu();
submenu.append(new MenuItem({ type: 'checkbox', label: 'box1' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box2' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box3' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box4' }));

var menu1 = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1',click: function() { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
menu.append(new MenuItem({ label: 'Disk', submenu: submenu}));

window.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	menu.popup(remote.getCurrentWindow());
  }, false);