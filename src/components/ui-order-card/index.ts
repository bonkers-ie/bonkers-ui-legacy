import { withInstall } from "../../_types/helper";
import OrderCard from "./ui-order-card.vue";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiOrderCard = withInstall(OrderCard);
export default UiOrderCard;
