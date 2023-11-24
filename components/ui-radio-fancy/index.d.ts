import { ERadioSizes } from './_typings';
import { TIconName } from '../ui-icon';
import { ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType, Slot, ComponentPublicInstance, ComponentOptionsBase, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties } from './vue/dist/vue.esm-bundler.js';
import UiRadioFancy from "./ui-radio-fancy.vue";
export { UiRadioFancy };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            iconName: TIconName;
            radioSize: ERadioSizes;
        }> & Omit<{
            readonly modelValue: string | number | boolean;
            readonly value: string | number | boolean;
            readonly name: string;
            readonly radioSize: ERadioSizes;
            readonly iconName?: TIconName | undefined;
            readonly disabled?: boolean | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
            iconName: {
                type: PropType<TIconName>;
                default: undefined;
            };
            disabled: {
                type: PropType<boolean>;
            };
            modelValue: {
                type: PropType<string | number | boolean>;
                required: true;
            };
            value: {
                type: PropType<string | number | boolean>;
                required: true;
            };
            name: {
                type: PropType<string>;
                required: true;
            };
            radioSize: {
                type: PropType<ERadioSizes>;
                default: ERadioSizes;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, "iconName" | "radioSize">;
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
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<{
            iconName: {
                type: PropType<TIconName>;
                default: undefined;
            };
            disabled: {
                type: PropType<boolean>;
            };
            modelValue: {
                type: PropType<string | number | boolean>;
                required: true;
            };
            value: {
                type: PropType<string | number | boolean>;
                required: true;
            };
            name: {
                type: PropType<string>;
                required: true;
            };
            radioSize: {
                type: PropType<ERadioSizes>;
                default: ERadioSizes;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
            "update:modelValue": (...args: any[]) => void;
        }, string, {
            iconName: TIconName;
            radioSize: ERadioSizes;
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
        iconName: {
            type: PropType<TIconName>;
            default: undefined;
        };
        disabled: {
            type: PropType<boolean>;
        };
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        radioSize: {
            type: PropType<ERadioSizes>;
            default: ERadioSizes;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    iconName: {
        type: PropType<TIconName>;
        default: undefined;
    };
    disabled: {
        type: PropType<boolean>;
    };
    modelValue: {
        type: PropType<string | number | boolean>;
        required: true;
    };
    value: {
        type: PropType<string | number | boolean>;
        required: true;
    };
    name: {
        type: PropType<string>;
        required: true;
    };
    radioSize: {
        type: PropType<ERadioSizes>;
        default: ERadioSizes;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {
    iconName: TIconName;
    radioSize: ERadioSizes;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
