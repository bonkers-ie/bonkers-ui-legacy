import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
type TProps = {
    inputsCount: number;
    type?: "text";
};
declare function __VLS_template(): {
    button?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_TypePropsToRuntimeProps<TProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onFiled: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<TProps>>> & {
    onOnFiled?: ((...args: any[]) => any) | undefined;
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
//# sourceMappingURL=ui-verification-input.vue.d.ts.map