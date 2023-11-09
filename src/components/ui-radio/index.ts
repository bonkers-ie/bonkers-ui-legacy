import { withInstall } from "../../_types/helper";
import Radio from "./ui-radio.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiRadio = withInstall(Radio);
export default UiRadio;
