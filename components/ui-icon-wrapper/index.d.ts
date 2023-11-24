import { EIconWrapperSizes, EIconWrapperTypes } from './_typings';
import { ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType, Slot, ComponentPublicInstance, ComponentOptionsBase, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties } from './vue/dist/vue.esm-bundler.js';
import UiIconWrapper from "./ui-icon-wrapper.vue";
export { UiIconWrapper };
export { EIconWrapperTypes, EIconWrapperSizes } from "./_typings";
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: EIconWrapperSizes;
            kind: EIconWrapperTypes;
        }> & Omit<{
            readonly size: EIconWrapperSizes;
            readonly kind: EIconWrapperTypes;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
            size: {
                type: PropType<EIconWrapperSizes>;
                default: EIconWrapperSizes;
            };
            kind: {
                type: PropType<EIconWrapperTypes>;
                default: EIconWrapperTypes;
            };
        }>>, "size" | "kind">;
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
                type: PropType<EIconWrapperSizes>;
                default: EIconWrapperSizes;
            };
            kind: {
                type: PropType<EIconWrapperTypes>;
                default: EIconWrapperTypes;
            };
        }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
            size: EIconWrapperSizes;
            kind: EIconWrapperTypes;
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
            type: PropType<EIconWrapperSizes>;
            default: EIconWrapperSizes;
        };
        kind: {
            type: PropType<EIconWrapperTypes>;
            default: EIconWrapperTypes;
        };
    }>> & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    size: {
        type: PropType<EIconWrapperSizes>;
        default: EIconWrapperSizes;
    };
    kind: {
        type: PropType<EIconWrapperTypes>;
        default: EIconWrapperTypes;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    size: EIconWrapperSizes;
    kind: EIconWrapperTypes;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
