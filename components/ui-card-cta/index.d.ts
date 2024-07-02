import { default as UiCardCta } from './ui-card-cta.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { TIconName } from '../ui-icon';

export { UiCardCta };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        invertOrder: {
            type: PropType<boolean>;
        };
        disabled: {
            type: PropType<boolean>;
        };
        iconName: {
            type: PropType<TIconName>;
        };
        title: {
            type: PropType<string>;
        };
        description: {
            type: PropType<string>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        invertOrder: {
            type: PropType<boolean>;
        };
        disabled: {
            type: PropType<boolean>;
        };
        iconName: {
            type: PropType<TIconName>;
        };
        title: {
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
    }, Readonly< ExtractPropTypes<{
        invertOrder: {
            type: PropType<boolean>;
        };
        disabled: {
            type: PropType<boolean>;
        };
        iconName: {
            type: PropType<TIconName>;
        };
        title: {
            type: PropType<string>;
        };
        description: {
            type: PropType<string>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    invertOrder: {
        type: PropType<boolean>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    iconName: {
        type: PropType<TIconName>;
    };
    title: {
        type: PropType<string>;
    };
    description: {
        type: PropType<string>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        iconSlot?(_: {}): any;
        titleSlot?(_: {}): any;
        descriptionSlot?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map