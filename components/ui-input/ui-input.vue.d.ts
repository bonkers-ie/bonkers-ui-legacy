import { EAutocomplete, EInputKinds, EInputType } from './_typings';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare function __VLS_template(): {
    header?(_: {}): any;
    "prefix-icon"?(_: {}): any;
    "postfix-icon"?(_: {}): any;
    subLabel?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    placeholder?: string;
    modelValue: string | number;
    disabled?: boolean;
    kind?: EInputKinds;
    heading?: string;
    subLabel?: string;
    type?: EInputType;
    pattern?: string;
    maxlength?: string;
    minlength?: string;
    focusHandler?: (e: FocusEvent) => void;
    autocomplete?: EAutocomplete;
    name?: string;
}>, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    autocomplete: undefined;
    name: undefined;
    heading: undefined;
    subLabel: undefined;
    pattern: undefined;
    maxlength: undefined;
    minlength: undefined;
    type: EInputType;
    focusHandler: () => undefined;
    kind: EInputKinds;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    placeholder?: string;
    modelValue: string | number;
    disabled?: boolean;
    kind?: EInputKinds;
    heading?: string;
    subLabel?: string;
    type?: EInputType;
    pattern?: string;
    maxlength?: string;
    minlength?: string;
    focusHandler?: (e: FocusEvent) => void;
    autocomplete?: EAutocomplete;
    name?: string;
}>, {
    modelValue: string;
    placeholder: string;
    disabled: boolean;
    autocomplete: undefined;
    name: undefined;
    heading: undefined;
    subLabel: undefined;
    pattern: undefined;
    maxlength: undefined;
    minlength: undefined;
    type: EInputType;
    focusHandler: () => undefined;
    kind: EInputKinds;
}>>> & {
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
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=ui-input.vue.d.ts.map