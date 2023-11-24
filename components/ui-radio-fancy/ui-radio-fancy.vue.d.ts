import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from './vue/dist/vue.esm-bundler.js';
import type { TIconName } from "../ui-icon";
import { ERadioSizes } from "./_typings";
declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | boolean;
    name: string;
    value: string | number | boolean;
    iconName?: TIconName | undefined;
    disabled?: boolean | undefined;
    radioSize?: ERadioSizes | undefined;
}>, {
    radioSize: ERadioSizes;
    iconName: undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | boolean;
    name: string;
    value: string | number | boolean;
    iconName?: TIconName | undefined;
    disabled?: boolean | undefined;
    radioSize?: ERadioSizes | undefined;
}>, {
    radioSize: ERadioSizes;
    iconName: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    iconName: TIconName;
    radioSize: ERadioSizes;
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
