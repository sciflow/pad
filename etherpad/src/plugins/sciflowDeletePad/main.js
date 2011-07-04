import("etherpad.log");
import("plugins.sciflowDeletePad.hooks");
import("plugins.sciflowDeletePad.static.js.main");
import("sqlbase.sqlobj");
import("sqlbase.sqlcommon");

function sciflowDeletePadInit() {
 this.hooks = ['editBarItemsLeftPad','handlePath'];
 this.client = new main.sciflowDeletePadInit();
 this.description = 'sciflowDeletePad';
 this.editBarItemsLeftPad = hooks.editBarItemsLeftPad;
 this.handlePath = hooks.handlePath;
 this.install = install;
 this.uninstall = uninstall;
}

function install() {
 log.info("Installing sciflowDeletePad");
}

function uninstall() {
 log.info("Uninstalling sciflowDeletePad");
}

