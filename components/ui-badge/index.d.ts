import { default as UiBadge } from './ui-badge.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EBadgeSize, EBadgeKind } from './_typings';
import { TIconName } from '../ui-icon';
export { UiBadge };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
            default: EBadgeSize;
        };
        icon: {
            type: PropType<TIconName>;
        };
        kind: {
            type: PropType<EBadgeKind>;
            default: EBadgeKind;
        };
        rounded: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
            default: EBadgeSize;
        };
        icon: {
            type: PropType<TIconName>;
        };
        kind: {
            type: PropType<EBadgeKind>;
            default: EBadgeKind;
        };
        rounded: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {
        size: EBadgeSize;
        kind: EBadgeKind;
        rounded: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
            default: EBadgeSize;
        };
        icon: {
            type: PropType<TIconName>;
        };
        kind: {
            type: PropType<EBadgeKind>;
            default: EBadgeKind;
        };
        rounded: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>>, {}, {}, {}, {}, {
        size: EBadgeSize;
        kind: EBadgeKind;
        rounded: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    size: {
        type: PropType<EBadgeSize>;
        default: EBadgeSize;
    };
    icon: {
        type: PropType<TIconName>;
    };
    kind: {
        type: PropType<EBadgeKind>;
        default: EBadgeKind;
    };
    rounded: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    size: EBadgeSize;
    kind: EBadgeKind;
    rounded: boolean;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
export { EBadgeKind, EBadgeSize } from './_typings';
//# sourceMappingURL=index.d.ts.map