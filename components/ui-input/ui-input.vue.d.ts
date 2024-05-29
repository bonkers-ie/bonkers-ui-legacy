import { EAutocomplete, EInputKinds, EInputType } from './_typings';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    placeholder?: string | undefined;
    modelValue: string | number;
    disabled?: boolean | undefined;
    kind?: EInputKinds | undefined;
    heading?: string | undefined;
    subLabel?: string | undefined;
    type?: EInputType | undefined;
    pattern?: string | undefined;
    maxlength?: string | undefined;
    minlength?: string | undefined;
    focusHandler?: ((e: FocusEvent) => void) | undefined;
    autocomplete?: EAutocomplete | undefined;
    name?: string | undefined;
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
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    placeholder?: string | undefined;
    modelValue: string | number;
    disabled?: boolean | undefined;
    kind?: EInputKinds | undefined;
    heading?: string | undefined;
    subLabel?: string | undefined;
    type?: EInputType | undefined;
    pattern?: string | undefined;
    maxlength?: string | undefined;
    minlength?: string | undefined;
    focusHandler?: ((e: FocusEvent) => void) | undefined;
    autocomplete?: EAutocomplete | undefined;
    name?: string | undefined;
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
    pattern: string;
    kind: EInputKinds;
    disabled: boolean;
    modelValue: string | number;
    name: string;
    placeholder: string;
    heading: string;
    subLabel: string;
    maxlength: string;
    minlength: string;
    focusHandler: (e: FocusEvent) => void;
    autocomplete: EAutocomplete;
}, {}>, {
    header?(_: {}): any;
    "prefix-icon"?(_: {}): any;
    "postfix-icon"?(_: {}): any;
    subLabel?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
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
//# sourceMappingURL=ui-input.vue.d.ts.map