import { default as UiTypography } from './ui-typography.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, Component, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from 'vue';
import { ETextAlign, ETypographySizes, ETextWeight, ETextTransform } from './_typings';
import { EColors } from '../../_types/colors';
export { UiTypography };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 **/
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        align: {
            type: PropType<ETextAlign>;
        };
        size: {
            type: PropType<ETypographySizes>;
        };
        kind: {
            type: PropType<EColors>;
        };
        weight: {
            type: PropType<ETextWeight>;
        };
        lineHeight: {
            type: PropType<boolean>;
        };
        textTransform: {
            type: PropType<ETextTransform>;
        };
        underline: {
            type: PropType<boolean>;
        };
        is: {
            type: PropType<string | Component>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        align: {
            type: PropType<ETextAlign>;
        };
        size: {
            type: PropType<ETypographySizes>;
        };
        kind: {
            type: PropType<EColors>;
        };
        weight: {
            type: PropType<ETextWeight>;
        };
        lineHeight: {
            type: PropType<boolean>;
        };
        textTransform: {
            type: PropType<ETextTransform>;
        };
        underline: {
            type: PropType<boolean>;
        };
        is: {
            type: PropType<string | Component>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        align: {
            type: PropType<ETextAlign>;
        };
        size: {
            type: PropType<ETypographySizes>;
        };
        kind: {
            type: PropType<EColors>;
        };
        weight: {
            type: PropType<ETextWeight>;
        };
        lineHeight: {
            type: PropType<boolean>;
        };
        textTransform: {
            type: PropType<ETextTransform>;
        };
        underline: {
            type: PropType<boolean>;
        };
        is: {
            type: PropType<string | Component>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    align: {
        type: PropType<ETextAlign>;
    };
    size: {
        type: PropType<ETypographySizes>;
    };
    kind: {
        type: PropType<EColors>;
    };
    weight: {
        type: PropType<ETextWeight>;
    };
    lineHeight: {
        type: PropType<boolean>;
    };
    textTransform: {
        type: PropType<ETextTransform>;
    };
    underline: {
        type: PropType<boolean>;
    };
    is: {
        type: PropType<string | Component>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
export { ETypographySizes, ETextWeight, ETextAlign, ETextTransform } from './_typings';
export { EColors } from '../../_types/colors';
//# sourceMappingURL=index.d.ts.map