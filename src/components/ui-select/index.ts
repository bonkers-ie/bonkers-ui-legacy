import { withInstall } from "../../_types/helper";
import Select from "./ui-select.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiSelect = withInstall(Select);
export default UiSelect;
