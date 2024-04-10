import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { EIconWrapperSizes, EIconWrapperTypes } from './_typings';

type TProps = {
    kind?: EIconWrapperTypes;
    size?: EIconWrapperSizes;
};
declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TProps>, {
    kind: EIconWrapperTypes;
    size: EIconWrapperSizes;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TProps>, {
    kind: EIconWrapperTypes;
    size: EIconWrapperSizes;
}>>>, {
    size: EIconWrapperSizes;
    kind: EIconWrapperTypes;
}, {}>, {
    default?(_: {}): any;
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
//# sourceMappingURL=ui-icon-wrapper.vue.d.ts.map