import { withInstall } from "../../_types/helper";
import RadioFancy from "./ui-radio-fancy.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiRadioFancy = withInstall(RadioFancy);
export default UiRadioFancy;
