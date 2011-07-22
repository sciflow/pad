import("etherpad.globals.*");
import("etherpad.log");
import("etherpad.utils.*");
import("dispatch.{Dispatcher,PrefixMatcher,forward}");
import("faststatic");

function editBarItemsLeftPad(arg) {
  return arg.template.include('headingsPluginEditbarControls.ejs', undefined, ['headings']);
}
