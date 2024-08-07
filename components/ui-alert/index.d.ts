import { default as UiAlert } from './ui-alert.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { TIconName } from '../ui-icon';
import { EAlertTypes } from './_types';
export { UiAlert };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        icon: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EAlertTypes>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        icon: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EAlertTypes>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        icon: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EAlertTypes>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    icon: {
        type: PropType<TIconName>;
        required: true;
    };
    kind: {
        type: PropType<EAlertTypes>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
export { EAlertTypes } from './_types';
//# sourceMappingURL=index.d.ts.map