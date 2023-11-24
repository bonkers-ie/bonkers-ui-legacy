import { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from './vue/dist/vue.esm-bundler.js';
import UiInputRange from "./ui-input-range.vue";
export { UiInputRange };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    modelValue: {
        type: PropType<number>;
        required: true;
    };
    min: {
        type: PropType<string | number>;
        required: true;
    };
    max: {
        type: PropType<string | number>;
        required: true;
    };
    step: {
        type: PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (state: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<number>;
        required: true;
    };
    min: {
        type: PropType<string | number>;
        required: true;
    };
    max: {
        type: PropType<string | number>;
        required: true;
    };
    step: {
        type: PropType<string | number>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((state: number) => any) | undefined;
}, {}, {}>;
export default deprecatedDefault;
