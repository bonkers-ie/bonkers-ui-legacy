import { TIconName } from '../ui-icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<__VLS_TypePropsToRuntimeProps<{
    invertOrder?: boolean | undefined;
    disabled?: boolean | undefined;
    iconName?: TIconName | undefined;
    title?: string | undefined;
    description?: string | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    invertOrder?: boolean | undefined;
    disabled?: boolean | undefined;
    iconName?: TIconName | undefined;
    title?: string | undefined;
    description?: string | undefined;
}>>>, {}, {}>, {
    iconSlot?(_: {}): any;
    titleSlot?(_: {}): any;
    descriptionSlot?(_: {}): any;
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
//# sourceMappingURL=ui-card-cta.vue.d.ts.map