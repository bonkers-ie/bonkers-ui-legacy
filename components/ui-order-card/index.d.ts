import { default as UiOrderCard } from './ui-order-card.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from 'vue';
import { TIconName } from '../ui-icon';
import { EOrderCardTypes } from './_types';
export { UiOrderCard };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EOrderCardTypes>;
            default: EOrderCardTypes;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EOrderCardTypes>;
            default: EOrderCardTypes;
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
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EOrderCardTypes>;
            default: EOrderCardTypes;
        };
    }>>, {}, {}, {}, {}, {
        kind: EOrderCardTypes;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    iconName: {
        type: PropType<TIconName>;
        required: true;
    };
    kind: {
        type: PropType<EOrderCardTypes>;
        default: EOrderCardTypes;
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