import UiTypography from "./ui-typography.vue";

export { UiTypography };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 **/
const deprecatedDefault = UiTypography;
export default deprecatedDefault;

export { ETypographySizes, ETextWeight, ETextAlign, ETextTransform } from "./_typings";
export { EColors } from "../../_types/colors";
