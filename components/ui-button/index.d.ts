import { EButtonSizes, EButtonTypes } from './_typings';
import { ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType, Slot, ComponentPublicInstance, ComponentOptionsBase, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties } from './vue/dist/vue.esm-bundler.js';
import UiButton from "./ui-button.vue";
export { UiButton };
export { EButtonSizes, EButtonTypes } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: EButtonSizes;
            kind: EButtonTypes;
            fullWidth: boolean;
            disabled: boolean;
        }> & Omit<{
            readonly size: EButtonSizes;
            readonly kind: EButtonTypes;
            readonly fullWidth: boolean;
            readonly disabled: boolean;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
            size: {
                type: PropType<EButtonSizes>;
                default: EButtonSizes;
            };
            kind: {
                type: PropType<EButtonTypes>;
                default: EButtonTypes;
            };
            fullWidth: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>>, "size" | "kind" | "fullWidth" | "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot<any> | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<{
            size: {
                type: PropType<EButtonSizes>;
                default: EButtonSizes;
            };
            kind: {
                type: PropType<EButtonTypes>;
                default: EButtonTypes;
            };
            fullWidth: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
            size: EButtonSizes;
            kind: EButtonTypes;
            fullWidth: boolean;
            disabled: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        size: {
            type: PropType<EButtonSizes>;
            default: EButtonSizes;
        };
        kind: {
            type: PropType<EButtonTypes>;
            default: EButtonTypes;
        };
        fullWidth: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    size: {
        type: PropType<EButtonSizes>;
        default: EButtonSizes;
    };
    kind: {
        type: PropType<EButtonTypes>;
        default: EButtonTypes;
    };
    fullWidth: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    size: EButtonSizes;
    kind: EButtonTypes;
    fullWidth: boolean;
    disabled: boolean;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        prefix?(_: {}): any;
        default?(_: {}): any;
        postfix?(_: {}): any;
    };
});
export default deprecatedDefault;
