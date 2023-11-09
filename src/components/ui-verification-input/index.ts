import { withInstall } from "../../_types/helper";
import VerificationInput from "./ui-verification-input.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiVerificationInput = withInstall(VerificationInput);
export default VerificationInput;
