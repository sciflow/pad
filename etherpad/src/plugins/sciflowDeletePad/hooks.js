import("etherpad.log");
import("faststatic");
import("etherpad.utils.*");
import("etherpad.globals.*");
import("dispatch.{Dispatcher,PrefixMatcher,forward}");
import("sqlbase.sqlobj");
import("plugins.sciflowDeletePad.controllers.reqHandler");

function editBarItemsLeftPad(arg) {
  return arg.template.include('sciflowDeletePadEditbarButtons.ejs', undefined, ['sciflowDeletePad']);
}

function handlePath() {
  /* return [[PrefixMatcher('/sciflow/api/sciflowDeletePad'), forward(reqHandler)]]; */
  return [[PrefixMatcher('/sciflow/api/sciflowDeletePad'), forward(reqHandler)]];
}