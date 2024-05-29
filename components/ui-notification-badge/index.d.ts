import { default as UiNotificationBadge } from './ui-notification-badge.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EBadgeOrigin } from './_types';

export { UiNotificationBadge };
export { EBadgeOrigin } from './_types';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        origin: {
            type: PropType<EBadgeOrigin>;
            default: EBadgeOrigin;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        origin: {
            type: PropType<EBadgeOrigin>;
            default: EBadgeOrigin;
        };
    }>>, {
        origin: EBadgeOrigin;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        origin: {
            type: PropType<EBadgeOrigin>;
            default: EBadgeOrigin;
        };
    }>>, {}, {}, {}, {}, {
        origin: EBadgeOrigin;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    origin: {
        type: PropType<EBadgeOrigin>;
        default: EBadgeOrigin;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    origin: EBadgeOrigin;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map