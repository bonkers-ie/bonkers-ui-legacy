import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | boolean;
    header?: string | undefined;
    subHeader?: string | undefined;
    name: string;
    value: string | number | boolean;
    disabled?: boolean | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | boolean;
    header?: string | undefined;
    subHeader?: string | undefined;
    name: string;
    value: string | number | boolean;
    disabled?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    header?(_: {}): any;
    subHeader?(_: {}): any;
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
//# sourceMappingURL=ui-plain-radio.vue.d.ts.map