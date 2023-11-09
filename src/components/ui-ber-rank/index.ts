import { withInstall } from "../../_types/helper";
import BerRank from "./ui-ber-rank.vue";

export { EBerSize } from "./_types";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiBerRank = withInstall(BerRank);
export default UiBerRank;
