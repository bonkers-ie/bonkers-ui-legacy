import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../vue/dist/vue.esm-bundler.js';
declare const _default: DefineComponent<__VLS_TypePropsToRuntimeProps<{
    size: number;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size: number;
}>>>, {}, {}>;
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
//# sourceMappingURL=icon.vue.d.ts.map