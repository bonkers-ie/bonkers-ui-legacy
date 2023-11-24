import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from './vue/dist/vue.esm-bundler.js';
import { EButtonSizes, EButtonTypes } from "./_typings";
type TProps = {
    kind?: EButtonTypes;
    size?: EButtonSizes;
    fullWidth?: boolean;
    disabled?: boolean;
};
declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TProps>, {
    kind: EButtonTypes;
    size: EButtonSizes;
    fullWidth: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TProps>, {
    kind: EButtonTypes;
    size: EButtonSizes;
    fullWidth: boolean;
    disabled: boolean;
}>>>, {
    size: EButtonSizes;
    kind: EButtonTypes;
    fullWidth: boolean;
    disabled: boolean;
}, {}>, {
    prefix?(_: {}): any;
    default?(_: {}): any;
    postfix?(_: {}): any;
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
