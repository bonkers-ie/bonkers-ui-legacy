import { TIconName } from '../ui-icon';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from './vue/dist/vue.esm-bundler.js';
import UiResultCardRange from "./ui-result-card-range.vue";
export { UiResultCardRange };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        iconName: {
            type: PropType<TIconName>;
        };
        title: {
            type: PropType<string>;
        };
        size: {
            type: PropType<string>;
        };
        description: {
            type: PropType<string>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        iconName: {
            type: PropType<TIconName>;
        };
        title: {
            type: PropType<string>;
        };
        size: {
            type: PropType<string>;
        };
        description: {
            type: PropType<string>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        iconName: {
            type: PropType<TIconName>;
        };
        title: {
            type: PropType<string>;
        };
        size: {
            type: PropType<string>;
        };
        description: {
            type: PropType<string>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    iconName: {
        type: PropType<TIconName>;
    };
    title: {
        type: PropType<string>;
    };
    size: {
        type: PropType<string>;
    };
    description: {
        type: PropType<string>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
