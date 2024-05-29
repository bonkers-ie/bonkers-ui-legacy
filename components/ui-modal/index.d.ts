import { default as UiModal } from './ui-modal.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EModalSizes } from './_typings';

export { UiModal };
export { EModalSizes } from './_typings';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: undefined;
        };
        modalSize: {
            type: PropType<EModalSizes>;
            default: EModalSizes;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: undefined;
        };
        modalSize: {
            type: PropType<EModalSizes>;
            default: EModalSizes;
        };
    }>>, {
        title: string;
        modalSize: EModalSizes;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: undefined;
        };
        modalSize: {
            type: PropType<EModalSizes>;
            default: EModalSizes;
        };
    }>>, {}, {}, {}, {}, {
        title: string;
        modalSize: EModalSizes;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: undefined;
    };
    modalSize: {
        type: PropType<EModalSizes>;
        default: EModalSizes;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    title: string;
    modalSize: EModalSizes;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        title?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map