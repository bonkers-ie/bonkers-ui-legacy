import { withInstall } from "../../_types/helper";
import Snackbar from "./ui-snackbar.vue";
export { ESnackbarTypes } from "./_types";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiSnackbar = withInstall(Snackbar);
export default UiSnackbar;
