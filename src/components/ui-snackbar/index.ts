import UiSnackbar from "./ui-snackbar.vue";

export { UiSnackbar };
export { ESnackbarTypes } from "./_types";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiSnackbar;
export default deprecatedDefault;
