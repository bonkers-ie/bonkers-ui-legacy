import { withInstall } from "../../_types/helper";
import Alert from "./ui-alert.vue";

export { EAlertTypes } from "./_types";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiAlert = withInstall(Alert);
export default UiAlert;
