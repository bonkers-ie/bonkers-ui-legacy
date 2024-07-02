import { DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../../vue/dist/vue.esm-bundler.js';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{}>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ui-backdrop.vue.d.ts.map