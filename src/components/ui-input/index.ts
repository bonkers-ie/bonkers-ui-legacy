import UiInput from "./ui-input.vue";

export { EInputType, EInputKinds, EAutocomplete } from "./_typings";
export { UiInput };

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiInput;
export default deprecatedDefault;
