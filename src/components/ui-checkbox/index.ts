import { withInstall } from "../../_types/helper";
import Checkbox from "./ui-checkbox.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiCheckbox = withInstall(Checkbox);
export default UiCheckbox;
