import { withInstall } from "../../_types/helper";
import CardResult from "./ui-card-result.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiCardResult = withInstall(CardResult);
export default UiCardResult;
