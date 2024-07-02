import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare function __VLS_template(): {
    header?(_: {}): any;
    subHeader?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | boolean;
    header?: string;
    subHeader?: string;
    name: string;
    value: string | number | boolean;
    disabled?: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | boolean;
    header?: string;
    subHeader?: string;
    name: string;
    value: string | number | boolean;
    disabled?: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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