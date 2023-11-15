import UiButton from "./ui-button.vue";

export { UiButton };
export { EButtonSizes, EButtonTypes } from "./_typings";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiButton;
export default deprecatedDefault;

