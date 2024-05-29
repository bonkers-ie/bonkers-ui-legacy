import { default as UiCheckbox } from './ui-checkbox.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EJustify } from '../../types';

export { UiCheckbox };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        justify: {
            type: PropType<EJustify>;
        };
        invertOrder: {
            type: PropType<boolean>;
        };
        disabled: {
            type: PropType<boolean>;
        };
        value: {
            type: PropType<string>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        justify: {
            type: PropType<EJustify>;
        };
        invertOrder: {
            type: PropType<boolean>;
        };
        disabled: {
            type: PropType<boolean>;
        };
        value: {
            type: PropType<string>;
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
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        justify: {
            type: PropType<EJustify>;
        };
        invertOrder: {
            type: PropType<boolean>;
        };
        disabled: {
            type: PropType<boolean>;
        };
        value: {
            type: PropType<string>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean | unknown[]>;
        required: true;
    };
    justify: {
        type: PropType<EJustify>;
    };
    invertOrder: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    value: {
        type: PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map