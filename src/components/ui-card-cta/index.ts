import { withInstall } from "../../_types/helper";
import CardCta from "./ui-card-cta.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiCardCta = withInstall(CardCta);
export default UiCardCta;
