import { TIconName } from '../ui-icon';
import { EDropdownKinds } from './_typings';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    header?: string | undefined;
    iconName: TIconName;
    subText?: string | undefined;
    kind?: EDropdownKinds | undefined;
    active?: boolean | undefined;
}>, {
    kind: EDropdownKinds;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    header?: string | undefined;
    iconName: TIconName;
    subText?: string | undefined;
    kind?: EDropdownKinds | undefined;
    active?: boolean | undefined;
}>, {
    kind: EDropdownKinds;
}>>>, {
    kind: EDropdownKinds;
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
//# sourceMappingURL=ui-dropdown.vue.d.ts.map