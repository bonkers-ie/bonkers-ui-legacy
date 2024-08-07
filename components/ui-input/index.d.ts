import { default as UiInput } from './ui-input.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EInputType, EInputKinds, EAutocomplete } from './_typings';
export { EInputType, EInputKinds, EAutocomplete } from './_typings';
export { UiInput };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        type: {
            type: PropType<EInputType>;
            default: EInputType;
        };
        kind: {
            type: PropType<EInputKinds>;
            default: EInputKinds;
        };
        pattern: {
            type: PropType<string>;
            default: undefined;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        name: {
            type: PropType<string>;
            default: undefined;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        modelValue: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        heading: {
            type: PropType<string>;
            default: undefined;
        };
        subLabel: {
            type: PropType<string>;
            default: undefined;
        };
        maxlength: {
            type: PropType<string>;
            default: undefined;
        };
        minlength: {
            type: PropType<string>;
            default: undefined;
        };
        focusHandler: {
            type: PropType<(e: FocusEvent) => void>;
            default: () => undefined;
        };
        autocomplete: {
            type: PropType<EAutocomplete>;
            default: undefined;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        type: {
            type: PropType<EInputType>;
            default: EInputType;
        };
        kind: {
            type: PropType<EInputKinds>;
            default: EInputKinds;
        };
        pattern: {
            type: PropType<string>;
            default: undefined;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        name: {
            type: PropType<string>;
            default: undefined;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        modelValue: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        heading: {
            type: PropType<string>;
            default: undefined;
        };
        subLabel: {
            type: PropType<string>;
            default: undefined;
        };
        maxlength: {
            type: PropType<string>;
            default: undefined;
        };
        minlength: {
            type: PropType<string>;
            default: undefined;
        };
        focusHandler: {
            type: PropType<(e: FocusEvent) => void>;
            default: () => undefined;
        };
        autocomplete: {
            type: PropType<EAutocomplete>;
            default: undefined;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        type: EInputType;
        kind: EInputKinds;
        pattern: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        modelValue: string | number;
        heading: string;
        subLabel: string;
        maxlength: string;
        minlength: string;
        focusHandler: (e: FocusEvent) => void;
        autocomplete: EAutocomplete;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        type: {
            type: PropType<EInputType>;
            default: EInputType;
        };
        kind: {
            type: PropType<EInputKinds>;
            default: EInputKinds;
        };
        pattern: {
            type: PropType<string>;
            default: undefined;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        name: {
            type: PropType<string>;
            default: undefined;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        modelValue: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        heading: {
            type: PropType<string>;
            default: undefined;
        };
        subLabel: {
            type: PropType<string>;
            default: undefined;
        };
        maxlength: {
            type: PropType<string>;
            default: undefined;
        };
        minlength: {
            type: PropType<string>;
            default: undefined;
        };
        focusHandler: {
            type: PropType<(e: FocusEvent) => void>;
            default: () => undefined;
        };
        autocomplete: {
            type: PropType<EAutocomplete>;
            default: undefined;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        type: EInputType;
        kind: EInputKinds;
        pattern: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        modelValue: string | number;
        heading: string;
        subLabel: string;
        maxlength: string;
        minlength: string;
        focusHandler: (e: FocusEvent) => void;
        autocomplete: EAutocomplete;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    type: {
        type: PropType<EInputType>;
        default: EInputType;
    };
    kind: {
        type: PropType<EInputKinds>;
        default: EInputKinds;
    };
    pattern: {
        type: PropType<string>;
        default: undefined;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    name: {
        type: PropType<string>;
        default: undefined;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    heading: {
        type: PropType<string>;
        default: undefined;
    };
    subLabel: {
        type: PropType<string>;
        default: undefined;
    };
    maxlength: {
        type: PropType<string>;
        default: undefined;
    };
    minlength: {
        type: PropType<string>;
        default: undefined;
    };
    focusHandler: {
        type: PropType<(e: FocusEvent) => void>;
        default: () => undefined;
    };
    autocomplete: {
        type: PropType<EAutocomplete>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {
    type: EInputType;
    kind: EInputKinds;
    pattern: string;
    disabled: boolean;
    name: string;
    placeholder: string;
    modelValue: string | number;
    heading: string;
    subLabel: string;
    maxlength: string;
    minlength: string;
    focusHandler: (e: FocusEvent) => void;
    autocomplete: EAutocomplete;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        "prefix-icon"?(_: {}): any;
        "postfix-icon"?(_: {}): any;
        subLabel?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map