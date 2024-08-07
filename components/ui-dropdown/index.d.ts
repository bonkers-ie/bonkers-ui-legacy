import { default as UiDropdown } from './ui-dropdown.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { TIconName } from '../ui-icon/_typings.ts';
import { EDropdownKinds } from './_typings.ts';
export { UiDropdown };
export { EDropdownKinds } from './_typings.ts';
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
            type: PropType<EDropdownKinds>;
            default: EDropdownKinds;
        };
        header: {
            type: PropType<string>;
        };
        subText: {
            type: PropType<string>;
        };
        active: {
            type: PropType<boolean>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
        kind: {
            type: PropType<EDropdownKinds>;
            default: EDropdownKinds;
        };
        header: {
            type: PropType<string>;
        };
        subText: {
            type: PropType<string>;
        };
        active: {
            type: PropType<boolean>;
        };
    }>>, {
        kind: EDropdownKinds;
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
            type: PropType<EDropdownKinds>;
            default: EDropdownKinds;
        };
        header: {
            type: PropType<string>;
        };
        subText: {
            type: PropType<string>;
        };
        active: {
            type: PropType<boolean>;
        };
    }>>, {}, {}, {}, {}, {
        kind: EDropdownKinds;
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
        type: PropType<EDropdownKinds>;
        default: EDropdownKinds;
    };
    header: {
        type: PropType<string>;
    };
    subText: {
        type: PropType<string>;
    };
    active: {
        type: PropType<boolean>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    kind: EDropdownKinds;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map