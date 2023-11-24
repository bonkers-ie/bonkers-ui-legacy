import { ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType, Slot, ComponentPublicInstance, ComponentOptionsBase, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties } from './vue/dist/vue.esm-bundler.js';
import UiToggle from "./ui-toggle.vue";
export { UiToggle };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            readonly modelValue: boolean | unknown[];
            readonly header?: string | undefined;
            readonly title?: string | undefined;
            readonly disabled?: boolean | undefined;
            readonly invertOrder?: boolean | undefined;
            readonly value?: string | undefined;
            readonly alignCenter?: boolean | undefined;
            "onUpdate:modelValue"?: ((state: unknown) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
            header: {
                type: PropType<string>;
            };
            title: {
                type: PropType<string>;
            };
            modelValue: {
                type: PropType<boolean | unknown[]>;
                required: true;
            };
            disabled: {
                type: PropType<boolean>;
            };
            invertOrder: {
                type: PropType<boolean>;
            };
            alignCenter: {
                type: PropType<boolean>;
            };
            value: {
                type: PropType<string>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((state: unknown) => any) | undefined;
        }, never>;
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
        $emit: (event: "update:modelValue", state: unknown) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<{
            header: {
                type: PropType<string>;
            };
            title: {
                type: PropType<string>;
            };
            modelValue: {
                type: PropType<boolean | unknown[]>;
                required: true;
            };
            disabled: {
                type: PropType<boolean>;
            };
            invertOrder: {
                type: PropType<boolean>;
            };
            alignCenter: {
                type: PropType<boolean>;
            };
            value: {
                type: PropType<string>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((state: unknown) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
            "update:modelValue": (state: unknown) => void;
        }, string, {}, {}, string, {}> & {
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
        header: {
            type: PropType<string>;
        };
        title: {
            type: PropType<string>;
        };
        modelValue: {
            type: PropType<boolean | unknown[]>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
        };
        invertOrder: {
            type: PropType<boolean>;
        };
        alignCenter: {
            type: PropType<boolean>;
        };
        value: {
            type: PropType<string>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((state: unknown) => any) | undefined;
    } & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    header: {
        type: PropType<string>;
    };
    title: {
        type: PropType<string>;
    };
    modelValue: {
        type: PropType<boolean | unknown[]>;
        required: true;
    };
    disabled: {
        type: PropType<boolean>;
    };
    invertOrder: {
        type: PropType<boolean>;
    };
    alignCenter: {
        type: PropType<boolean>;
    };
    value: {
        type: PropType<string>;
    };
}>> & {
    "onUpdate:modelValue"?: ((state: unknown) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (state: unknown) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        title?(_: {}): any;
    };
});
export default deprecatedDefault;
