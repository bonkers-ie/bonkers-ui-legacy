import { TIconName } from '../ui-icon';
import { EBadgeSize, EBadgeKind } from './_typings';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from './vue/dist/vue.esm-bundler.js';
import UiBadge from "./ui-badge.vue";
export { UiBadge };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
        };
        kind: {
            type: PropType<EBadgeKind>;
        };
        icon: {
            type: PropType<TIconName>;
        };
        elipsis: {
            type: PropType<boolean>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
        };
        kind: {
            type: PropType<EBadgeKind>;
        };
        icon: {
            type: PropType<TIconName>;
        };
        elipsis: {
            type: PropType<boolean>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EBadgeSize>;
        };
        kind: {
            type: PropType<EBadgeKind>;
        };
        icon: {
            type: PropType<TIconName>;
        };
        elipsis: {
            type: PropType<boolean>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    size: {
        type: PropType<EBadgeSize>;
    };
    kind: {
        type: PropType<EBadgeKind>;
    };
    icon: {
        type: PropType<TIconName>;
    };
    elipsis: {
        type: PropType<boolean>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
export { EBadgeKind, EBadgeSize } from "./_typings";
