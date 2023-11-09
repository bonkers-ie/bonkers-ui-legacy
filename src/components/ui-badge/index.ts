import { withInstall } from "../../_types/helper";
import Badge from "./ui-badge.vue";

export { EBadgeKind, EBadgeSize } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiBadge = withInstall(Badge);
export default UiBadge;
