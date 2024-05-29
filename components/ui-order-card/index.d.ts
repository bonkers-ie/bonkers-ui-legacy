import { default as UiOrderCard } from './ui-order-card.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EOrderCardTypes } from './_types';
import { TIconName } from '../ui-icon';

export { UiOrderCard };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<EOrderCardTypes>;
            default: EOrderCardTypes;
        };
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<EOrderCardTypes>;
            default: EOrderCardTypes;
        };
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
    }>>, {
        kind: EOrderCardTypes;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<EOrderCardTypes>;
            default: EOrderCardTypes;
        };
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
    }>>, {}, {}, {}, {}, {
        kind: EOrderCardTypes;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    kind: {
        type: PropType<EOrderCardTypes>;
        default: EOrderCardTypes;
    };
    iconName: {
        type: PropType<TIconName>;
        required: true;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    kind: EOrderCardTypes;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        textBody?(_: {}): any;
        footer?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map