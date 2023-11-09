import { withInstall } from "../../_types/helper";
import NotificationBadge from "./ui-notification-badge.vue";

export { EBadgeOrigin } from "./_types";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiNotificationBadge = withInstall(NotificationBadge);
export default UiNotificationBadge;
