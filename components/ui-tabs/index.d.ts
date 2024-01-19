import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';
import UiTabs from "./ui-tabs.vue";
export { UiTabs };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    modelValue: {
        type: PropType<string>;
        required: true;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    tabs: {
        type: PropType<string[]>;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
        required: true;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    tabs: {
        type: PropType<string[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map