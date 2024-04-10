import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { EJustify } from '../../_types/align';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean | unknown[];
    justify?: EJustify | undefined;
    invertOrder?: boolean | undefined;
    disabled?: boolean | undefined;
    value?: string | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean | unknown[];
    justify?: EJustify | undefined;
    invertOrder?: boolean | undefined;
    disabled?: boolean | undefined;
    value?: string | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
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
//# sourceMappingURL=ui-checkbox.vue.d.ts.map