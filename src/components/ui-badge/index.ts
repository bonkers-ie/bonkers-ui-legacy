import UiBadge from "./ui-badge.vue";

export { UiBadge };

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiBadge;
export default deprecatedDefault;

export { EBadgeKind, EBadgeSize } from "./_typings";
