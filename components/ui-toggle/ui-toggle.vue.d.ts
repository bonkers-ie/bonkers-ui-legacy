import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from './vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_TypePropsToRuntimeProps<{
    header?: string | undefined;
    title?: string | undefined;
    modelValue: boolean | unknown[];
    disabled?: boolean | undefined;
    invertOrder?: boolean | undefined;
    alignCenter?: boolean | undefined;
    value?: string | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (state: unknown) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    header?: string | undefined;
    title?: string | undefined;
    modelValue: boolean | unknown[];
    disabled?: boolean | undefined;
    invertOrder?: boolean | undefined;
    alignCenter?: boolean | undefined;
    value?: string | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((state: unknown) => any) | undefined;
}, {}, {}>, {
    header?(_: {}): any;
    title?(_: {}): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
