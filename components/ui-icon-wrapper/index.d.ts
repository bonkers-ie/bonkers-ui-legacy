import { EIconWrapperSizes, EIconWrapperTypes } from './_typings';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from './vue/dist/vue.esm-bundler.js';
import UiIconWrapper from "./ui-icon-wrapper.vue";
export { UiIconWrapper };
export { EIconWrapperTypes, EIconWrapperSizes } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EIconWrapperSizes>;
            default: EIconWrapperSizes;
        };
        kind: {
            type: PropType<EIconWrapperTypes>;
            default: EIconWrapperTypes;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EIconWrapperSizes>;
            default: EIconWrapperSizes;
        };
        kind: {
            type: PropType<EIconWrapperTypes>;
            default: EIconWrapperTypes;
        };
    }>>, {
        size: EIconWrapperSizes;
        kind: EIconWrapperTypes;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EIconWrapperSizes>;
            default: EIconWrapperSizes;
        };
        kind: {
            type: PropType<EIconWrapperTypes>;
            default: EIconWrapperTypes;
        };
    }>>, {}, {}, {}, {}, {
        size: EIconWrapperSizes;
        kind: EIconWrapperTypes;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    size: {
        type: PropType<EIconWrapperSizes>;
        default: EIconWrapperSizes;
    };
    kind: {
        type: PropType<EIconWrapperTypes>;
        default: EIconWrapperTypes;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    size: EIconWrapperSizes;
    kind: EIconWrapperTypes;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
