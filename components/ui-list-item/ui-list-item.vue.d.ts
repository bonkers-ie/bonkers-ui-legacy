import { TIconName } from '../ui-icon';
import { EListItemTypes, EListItemSpacing, EListItemSize } from './_types';
import { HTMLAttributes, DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare function __VLS_template(): {
    icon?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
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
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
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
    title: string;
    icon: TIconName;
    kind: EListItemTypes;
    spacing: EListItemSpacing;
    iconClass: HTMLAttributes["class"];
}, {}>;
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
//# sourceMappingURL=ui-list-item.vue.d.ts.map