import { withInstall } from "../../_types/helper";
import Toggle from "./ui-toggle.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiToggle = withInstall(Toggle);
export default UiToggle;
