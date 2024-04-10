import { TIconName } from '../ui-icon';
import { EListItemSize, EListItemTypes, EListItemSpacing } from './_types';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { default as UiListItem } from './ui-list-item.vue';

export { EListItemTypes, EListItemSpacing, EListItemSize } from './_types';
export { UiListItem };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EListItemSize>;
            default: EListItemSize;
        };
        title: {
            type: PropType<string>;
            default: string;
        };
        icon: {
            type: PropType<TIconName>;
            default: undefined;
        };
        kind: {
            type: PropType<EListItemTypes>;
            default: EListItemTypes;
        };
        spacing: {
            type: PropType<EListItemSpacing>;
            default: EListItemSpacing;
        };
        iconClass: {
            type: PropType<any>;
            default: string;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EListItemSize>;
            default: EListItemSize;
        };
        title: {
            type: PropType<string>;
            default: string;
        };
        icon: {
            type: PropType<TIconName>;
            default: undefined;
        };
        kind: {
            type: PropType<EListItemTypes>;
            default: EListItemTypes;
        };
        spacing: {
            type: PropType<EListItemSpacing>;
            default: EListItemSpacing;
        };
        iconClass: {
            type: PropType<any>;
            default: string;
        };
    }>>, {
        size: EListItemSize;
        title: string;
        icon: TIconName;
        kind: EListItemTypes;
        spacing: EListItemSpacing;
        iconClass: any;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        size: {
            type: PropType<EListItemSize>;
            default: EListItemSize;
        };
        title: {
            type: PropType<string>;
            default: string;
        };
        icon: {
            type: PropType<TIconName>;
            default: undefined;
        };
        kind: {
            type: PropType<EListItemTypes>;
            default: EListItemTypes;
        };
        spacing: {
            type: PropType<EListItemSpacing>;
            default: EListItemSpacing;
        };
        iconClass: {
            type: PropType<any>;
            default: string;
        };
    }>>, {}, {}, {}, {}, {
        size: EListItemSize;
        title: string;
        icon: TIconName;
        kind: EListItemTypes;
        spacing: EListItemSpacing;
        iconClass: any;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    size: {
        type: PropType<EListItemSize>;
        default: EListItemSize;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    icon: {
        type: PropType<TIconName>;
        default: undefined;
    };
    kind: {
        type: PropType<EListItemTypes>;
        default: EListItemTypes;
    };
    spacing: {
        type: PropType<EListItemSpacing>;
        default: EListItemSpacing;
    };
    iconClass: {
        type: PropType<any>;
        default: string;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    size: EListItemSize;
    title: string;
    icon: TIconName;
    kind: EListItemTypes;
    spacing: EListItemSpacing;
    iconClass: any;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map