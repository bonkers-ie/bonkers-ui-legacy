import { withInstall } from "../../_types/helper";
import IconWrapper from "./ui-icon-wrapper.vue";

export { EIconWrapperTypes, EIconWrapperSizes } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiIconWrapper = withInstall(IconWrapper);
export default UiIconWrapper;
