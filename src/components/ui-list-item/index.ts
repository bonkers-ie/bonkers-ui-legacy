import UiListItem from "./ui-list-item.vue";
export { EListItemTypes, EListItemSpacing, EListItemSize } from "./_types";
export { UiListItem };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiListItem;
export default deprecatedDefault;
