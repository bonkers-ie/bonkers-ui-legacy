import { withInstall } from "../../_types/helper";
import ListItem from "./ui-list-item.vue";
export { EListItemTypes, EListItemSpacing, EListItemSize } from "./_types";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiListItem = withInstall(ListItem);
export default UiListItem;
