import { EColors } from '../../_types/colors';
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from './_typings';
import { Component, DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToRuntimeProps<{
    align?: ETextAlign | undefined;
    size?: ETypographySizes | undefined;
    kind?: EColors | undefined;
    weight?: ETextWeight | undefined;
    lineHeight?: boolean | undefined;
    textTransform?: ETextTransform | undefined;
    underline?: boolean | undefined;
    is?: string | Component | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    align?: ETextAlign | undefined;
    size?: ETypographySizes | undefined;
    kind?: EColors | undefined;
    weight?: ETextWeight | undefined;
    lineHeight?: boolean | undefined;
    textTransform?: ETextTransform | undefined;
    underline?: boolean | undefined;
    is?: string | Component | undefined;
}>>>, {}, {}>, {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ui-typography.vue.d.ts.map