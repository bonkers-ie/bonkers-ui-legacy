import { withInstall } from "../../_types/helper";
import Button from "./ui-button.vue";

export const UiButton = withInstall(Button);
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export default UiButton;
export { EButtonSizes, EButtonTypes } from "./_typings";
