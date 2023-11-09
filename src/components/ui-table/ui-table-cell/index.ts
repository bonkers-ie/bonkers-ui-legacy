import { withInstall } from "../../../_types/helper";
import TableCell from "./ui-table-cell.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiTableCell = withInstall(TableCell);
export default UiTableCell;
