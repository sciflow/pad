import("etherpad.log");
import("faststatic");
import("etherpad.utils.*");
import("etherpad.globals.*");
import("dispatch.{Dispatcher,PrefixMatcher,forward}");

function editBarItemsLeftPad(arg) {
  return arg.template.include('headingsPluginEditbarControls.ejs', undefined, ['headings']);
}