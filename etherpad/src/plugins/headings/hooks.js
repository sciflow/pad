import("etherpad.globals.*");
import("etherpad.helpers");
import("etherpad.log");
import("etherpad.utils.*");
import("dispatch.{Dispatcher,PrefixMatcher,forward}");
import("faststatic");

function editBarItemsLeftPad(arg) {
  return arg.template.include('headingsPluginEditbarControls.ejs', undefined, ['headings']);

  // TODO: This does not seem to be the right place for this
  helpers.addToHead('<script src="http://ajax.googleapis.com/ajax/libs/dojo/1.6/dojo/dojo.xd.js" djConfig="parseOnLoad: true"></script>');
  helpers.addToHead('<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/dojo/1.6/dijit/themes/claro/claro.css" />');
}
