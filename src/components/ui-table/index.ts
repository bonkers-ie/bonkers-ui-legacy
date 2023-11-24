import UiTable from "./ui-table.vue";

export { UiTable };

export { ETextAlign, ETextWeight } from "../ui-typography";
export { UiTableCell } from "./ui-table-cell";

export { UiTableRow, ERowKind } from "./ui-table-row";
export { ETableKind } from "./_types";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
const deprecatedDefault = UiTable;
export default deprecatedDefault;
