import { withInstall } from "../../_types/helper";
import Tabs from "./ui-tabs.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiTabs = withInstall(Tabs);
export default Tabs;
