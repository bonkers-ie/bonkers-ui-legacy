import { EButtonSizes, EButtonTypes } from './_typings';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { default as UiButton } from './ui-button.vue';

export { UiButton };
export { EButtonSizes, EButtonTypes } from './_typings';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EButtonSizes>;
            default: EButtonSizes;
        };
        kind: {
            type: PropType<EButtonTypes>;
            default: EButtonTypes;
        };
        fullWidth: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EButtonSizes>;
            default: EButtonSizes;
        };
        kind: {
            type: PropType<EButtonTypes>;
            default: EButtonTypes;
        };
        fullWidth: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {
        size: EButtonSizes;
        kind: EButtonTypes;
        fullWidth: boolean;
        disabled: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EButtonSizes>;
            default: EButtonSizes;
        };
        kind: {
            type: PropType<EButtonTypes>;
            default: EButtonTypes;
        };
        fullWidth: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {}, {}, {}, {}, {
        size: EButtonSizes;
        kind: EButtonTypes;
        fullWidth: boolean;
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    size: {
        type: PropType<EButtonSizes>;
        default: EButtonSizes;
    };
    kind: {
        type: PropType<EButtonTypes>;
        default: EButtonTypes;
    };
    fullWidth: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    size: EButtonSizes;
    kind: EButtonTypes;
    fullWidth: boolean;
    disabled: boolean;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        default?(_: {}): any;
        postfix?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map