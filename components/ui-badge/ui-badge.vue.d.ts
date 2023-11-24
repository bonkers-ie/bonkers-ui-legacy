import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType } from './vue/dist/vue.esm-bundler.js';
import { EBadgeKind, EBadgeSize } from "./_typings";
import { type TIconName } from "../ui-icon";
declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_TypePropsToRuntimeProps<{
    size?: EBadgeSize | undefined;
    kind?: EBadgeKind | undefined;
    icon?: TIconName | undefined;
    elipsis?: boolean | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: EBadgeSize | undefined;
    kind?: EBadgeKind | undefined;
    icon?: TIconName | undefined;
    elipsis?: boolean | undefined;
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
