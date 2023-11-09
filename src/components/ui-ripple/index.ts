import { withInstall } from "../../_types/helper";
import Ripple from "./ui-ripple.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiRipple = withInstall(Ripple);
export default UiRipple;
