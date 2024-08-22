import { default as UiCheckbox } from './ui-checkbox.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { ECheckboxSizes } from './_types';
import { EJustify } from '../../types';
export { UiCheckbox };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        size: {
            type: PropType<ECheckboxSizes>;
            default: ECheckboxSizes;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        value: {
            type: PropType<string>;
        };
        invertOrder: {
            type: PropType<boolean>;
            default: boolean;
        };
        justify: {
            type: PropType<EJustify>;
            default: EJustify;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        size: {
            type: PropType<ECheckboxSizes>;
            default: ECheckboxSizes;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        value: {
            type: PropType<string>;
        };
        invertOrder: {
            type: PropType<boolean>;
            default: boolean;
        };
        justify: {
            type: PropType<EJustify>;
            default: EJustify;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        size: ECheckboxSizes;
        disabled: boolean;
        invertOrder: boolean;
        justify: EJustify;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        size: {
            type: PropType<ECheckboxSizes>;
            default: ECheckboxSizes;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        modelValue: {
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        value: {
            type: PropType<string>;
        };
        invertOrder: {
            type: PropType<boolean>;
            default: boolean;
        };
        justify: {
            type: PropType<EJustify>;
            default: EJustify;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        size: ECheckboxSizes;
        disabled: boolean;
        invertOrder: boolean;
        justify: EJustify;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    size: {
        type: PropType<ECheckboxSizes>;
        default: ECheckboxSizes;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<boolean | unknown[]>;
        required: true;
    };
    value: {
        type: PropType<string>;
    };
    invertOrder: {
        type: PropType<boolean>;
        default: boolean;
    };
    justify: {
        type: PropType<EJustify>;
        default: EJustify;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {
    size: ECheckboxSizes;
    disabled: boolean;
    invertOrder: boolean;
    justify: EJustify;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map