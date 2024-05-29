import { default as UiDropdown } from './ui-dropdown.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { EDropdownKinds } from './_typings.ts';
import { TIconName } from '../ui-icon/_typings.ts';

export { UiDropdown };
export { EDropdownKinds } from './_typings.ts';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        header: {
            type: PropType<string>;
        };
        kind: {
            type: PropType<EDropdownKinds>;
            default: EDropdownKinds;
        };
        iconName: {
            type: PropType<TIconName>;
            required: true;
        };
        subText: {
            type: PropType<string>;
        };
        active: {
            type: PropType<boolean>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        header: {
            type: PropType<string>;
        };
        kind: {
            type: PropType<EDropdownKinds>;
            default: EDropdownKinds;
        };
        iconName: {
            type: PropType<TIconName>;
            required: true;
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
        header: {
            type: PropType<string>;
        };
        kind: {
            type: PropType<EDropdownKinds>;
            default: EDropdownKinds;
        };
        iconName: {
            type: PropType<TIconName>;
            required: true;
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
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    header: {
        type: PropType<string>;
    };
    kind: {
        type: PropType<EDropdownKinds>;
        default: EDropdownKinds;
    };
    iconName: {
        type: PropType<TIconName>;
        required: true;
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