import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes, PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { type TIconName } from "../ui-icon";
declare const _default: __VLS_WithTemplateSlots<DefineComponent<__VLS_TypePropsToRuntimeProps<{
    iconName?: TIconName | undefined;
    title?: string | undefined;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    iconName?: TIconName | undefined;
    title?: string | undefined;
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
//# sourceMappingURL=ui-result-card-range.vue.d.ts.map