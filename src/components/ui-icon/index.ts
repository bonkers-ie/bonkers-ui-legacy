import { withInstall } from "../../_types/helper";
import Icon from "./ui-icon.vue";

export { ESize } from "../../_types/sizing";
export type { TIconName } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiIcon = withInstall(Icon);
export default UiIcon;
