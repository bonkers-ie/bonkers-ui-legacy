import { withInstall } from "../../_types/helper";
import Input from "./ui-input.vue";
export { EInputType, EInputKinds, EAutocomplete } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiInput = withInstall(Input);
export default UiInput;
