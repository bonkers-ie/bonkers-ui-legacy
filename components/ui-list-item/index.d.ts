import { default as UiListItem } from './ui-list-item.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, HTMLAttributes, ComponentOptionsBase } from 'vue';
import { EListItemSize, EListItemTypes, EListItemSpacing } from './_types';
import { TIconName } from '../ui-icon';
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
        icon: {
            type: PropType<TIconName>;
            default: undefined;
        };
        kind: {
            type: PropType<EListItemTypes>;
            default: EListItemTypes;
        };
        title: {
            type: PropType<string>;
            default: string;
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
        icon: {
            type: PropType<TIconName>;
            default: undefined;
        };
        kind: {
            type: PropType<EListItemTypes>;
            default: EListItemTypes;
        };
        title: {
            type: PropType<string>;
            default: string;
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
        icon: TIconName;
        kind: EListItemTypes;
        title: string;
        spacing: EListItemSpacing;
        iconClass: HTMLAttributes["class"];
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
        icon: {
            type: PropType<TIconName>;
            default: undefined;
        };
        kind: {
            type: PropType<EListItemTypes>;
            default: EListItemTypes;
        };
        title: {
            type: PropType<string>;
            default: string;
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
        icon: TIconName;
        kind: EListItemTypes;
        title: string;
        spacing: EListItemSpacing;
        iconClass: HTMLAttributes["class"];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    size: {
        type: PropType<EListItemSize>;
        default: EListItemSize;
    };
    icon: {
        type: PropType<TIconName>;
        default: undefined;
    };
    kind: {
        type: PropType<EListItemTypes>;
        default: EListItemTypes;
    };
    title: {
        type: PropType<string>;
        default: string;
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
    icon: TIconName;
    kind: EListItemTypes;
    title: string;
    spacing: EListItemSpacing;
    iconClass: HTMLAttributes["class"];
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {}): any;
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map