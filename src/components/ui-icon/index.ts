import UiIcon from "./ui-icon.vue";

export { UiIcon };

export { ESize } from "../../_types/sizing";
export { EIconType } from "./_typings";
export type { TIconName } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiIcon;
export default deprecatedDefault;
