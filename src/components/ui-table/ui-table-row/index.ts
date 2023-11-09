import { withInstall } from "../../../_types/helper";
import TableRow from "./ui-table-row.vue";

export { ERowKind } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiTableRow = withInstall(TableRow);
export default UiTableRow;
