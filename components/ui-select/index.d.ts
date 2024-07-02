import { default as UiSelect } from './ui-select.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';

export { UiSelect };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number>;
            required: true;
        };
        heading: {
            type: PropType<string>;
        };
        subLabel: {
            type: PropType<string>;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number>;
            required: true;
        };
        heading: {
            type: PropType<string>;
        };
        subLabel: {
            type: PropType<string>;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number>;
            required: true;
        };
        heading: {
            type: PropType<string>;
        };
        subLabel: {
            type: PropType<string>;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number>;
        required: true;
    };
    heading: {
        type: PropType<string>;
    };
    subLabel: {
        type: PropType<string>;
    };
    disabled: {
        type: PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        heading?(_: {}): any;
        default?(_: {}): any;
        "postfix-icon"?(_: {}): any;
        subLabel?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map