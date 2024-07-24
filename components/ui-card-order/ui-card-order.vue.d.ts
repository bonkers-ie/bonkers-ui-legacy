import { TIconName } from '../ui-icon';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';

declare function __VLS_template(): {
    title?(_: {}): any;
    subtitle?(_: {}): any;
    providersImage?(_: {}): any;
    contentHeader?(_: {}): any;
    descriptions?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: DefineComponent<__VLS_TypePropsToRuntimeProps<{
    icon: TIconName;
    title?: string;
    contentHeader?: string;
    description?: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    icon: TIconName;
    title?: string;
    contentHeader?: string;
    description?: string;
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
//# sourceMappingURL=ui-card-order.vue.d.ts.map