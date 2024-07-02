import { Component, DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from './_typings';
import { EColors } from '../../_types/colors';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_TypePropsToRuntimeProps<{
    align?: ETextAlign;
    size?: ETypographySizes;
    kind?: EColors;
    weight?: ETextWeight;
    lineHeight?: boolean;
    textTransform?: ETextTransform;
    underline?: boolean;
    is?: string | Component;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    align?: ETextAlign;
    size?: ETypographySizes;
    kind?: EColors;
    weight?: ETextWeight;
    lineHeight?: boolean;
    textTransform?: ETextTransform;
    underline?: boolean;
    is?: string | Component;
}>>>, {}, {}>;
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
//# sourceMappingURL=ui-typography.vue.d.ts.map