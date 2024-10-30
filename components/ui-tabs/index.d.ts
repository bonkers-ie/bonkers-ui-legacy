import { default as UiTabs } from './ui-tabs.vue';
import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue';
export { UiTabs };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    name: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<string>;
        required: true;
    };
    tabs: {
        type: PropType<string[]>;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    name: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<string>;
        required: true;
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