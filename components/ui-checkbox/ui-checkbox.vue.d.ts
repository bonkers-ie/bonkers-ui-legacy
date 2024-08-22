import { EJustify } from '../../_types/align';
import { ECheckboxSizes as ECheckboxSize } from './_types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    modelValue: boolean | unknown[];
    justify?: EJustify;
    invertOrder?: boolean;
    disabled?: boolean;
    value?: string;
    size?: ECheckboxSize;
}>, {
    size: ECheckboxSize;
    disabled: boolean;
    justify: EJustify;
    invertOrder: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    modelValue: boolean | unknown[];
    justify?: EJustify;
    invertOrder?: boolean;
    disabled?: boolean;
    value?: string;
    size?: ECheckboxSize;
}>, {
    size: ECheckboxSize;
    disabled: boolean;
    justify: EJustify;
    invertOrder: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: ECheckboxSize;
    disabled: boolean;
    invertOrder: boolean;
    justify: EJustify;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
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
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=ui-checkbox.vue.d.ts.map