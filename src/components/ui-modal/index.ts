import { withInstall } from "../../_types/helper";
import Modal from "./ui-modal.vue";
export { EModalSizes } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
export const UiModal = withInstall(Modal);
export default UiModal;
