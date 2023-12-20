import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from './vue/dist/vue.esm-bundler.js';
import UiPlainRadio from "./ui-plain-radio.vue";
export { UiPlainRadio };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        header: {
            type: PropType<string>;
        };
        subHeader: {
            type: PropType<string>;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        header: {
            type: PropType<string>;
        };
        subHeader: {
            type: PropType<string>;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
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
    }, Readonly<ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        header: {
            type: PropType<string>;
        };
        subHeader: {
            type: PropType<string>;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | boolean>;
        required: true;
    };
    header: {
        type: PropType<string>;
    };
    subHeader: {
        type: PropType<string>;
    };
    name: {
        type: PropType<string>;
        required: true;
    };
    value: {
        type: PropType<string | number | boolean>;
        required: true;
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
        header?(_: {}): any;
        subHeader?(_: {}): any;
    };
});
export default deprecatedDefault;
