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
        };
        kind: {
            type: PropType<EBadgeKind>;
        };
        icon: {
            type: PropType<TIconName>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
        };
        kind: {
            type: PropType<EBadgeKind>;
        };
        icon: {
            type: PropType<TIconName>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
        };
        kind: {
            type: PropType<EBadgeKind>;
        };
        icon: {
            type: PropType<TIconName>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    size: {
        type: PropType<EBadgeSize>;
    };
    kind: {
        type: PropType<EBadgeKind>;
    };
    icon: {
        type: PropType<TIconName>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
export { EBadgeKind, EBadgeSize } from './_typings';
//# sourceMappingURL=index.d.ts.map