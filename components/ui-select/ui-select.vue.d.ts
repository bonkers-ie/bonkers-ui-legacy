import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number;
    heading?: string | undefined;
    subLabel?: string | undefined;
    disabled?: boolean | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number;
    heading?: string | undefined;
    subLabel?: string | undefined;
    disabled?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    heading?(_: {}): any;
    default?(_: {}): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ui-select.vue.d.ts.map