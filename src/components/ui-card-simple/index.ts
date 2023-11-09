import { withInstall } from "../../_types/helper";
import CardSimple from "./ui-card-simple.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiCardSimple = withInstall(CardSimple);
export default UiCardSimple;
