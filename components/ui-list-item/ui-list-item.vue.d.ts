import { TIconName } from '../ui-icon';
import { EListItemTypes, EListItemSpacing, EListItemSize } from './_types';
import { HTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from 'vue';
declare function __VLS_template(): {
    slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    icon?: TIconName;
    title?: string;
    kind?: EListItemTypes;
    size?: EListItemSize;
    spacing?: EListItemSpacing;
    iconClass?: HTMLAttributes["class"];
}>, {
    kind: EListItemTypes;
    size: EListItemSize;
    spacing: EListItemSpacing;
    title: string;
    icon: undefined;
    iconClass: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    icon?: TIconName;
    title?: string;
    kind?: EListItemTypes;
    size?: EListItemSize;
    spacing?: EListItemSpacing;
    iconClass?: HTMLAttributes["class"];
}>, {
    kind: EListItemTypes;
    size: EListItemSize;
    spacing: EListItemSpacing;
    title: string;
    icon: undefined;
    iconClass: string;
}>>>, {
    size: EListItemSize;
    icon: TIconName;
    kind: EListItemTypes;
    title: string;
    spacing: EListItemSpacing;
    iconClass: HTMLAttributes["class"];
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=ui-list-item.vue.d.ts.map