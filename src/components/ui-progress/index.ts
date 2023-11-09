import { withInstall } from "../../_types/helper";
import Progress from "./ui-progress.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiProgress = withInstall(Progress);
export default UiProgress;
