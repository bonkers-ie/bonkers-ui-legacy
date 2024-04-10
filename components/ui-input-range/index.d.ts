import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';
import { default as UiInputRange } from './ui-input-range.vue';

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
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map