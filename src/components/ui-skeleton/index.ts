import { withInstall } from "../../_types/helper";
import Skeleton from "./ui-skeleton.vue";

/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiSkeleton = withInstall(Skeleton);
export default UiSkeleton;
