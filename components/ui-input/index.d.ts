import { EInputType, EInputKinds, EAutocomplete } from './_typings';
import { ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes, PropType, Slot, ComponentPublicInstance, ComponentOptionsBase, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties } from './vue/dist/vue.esm-bundler.js';
import UiInput from "./ui-input.vue";
export { EInputType, EInputKinds, EAutocomplete } from "./_typings";
export { UiInput };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: EInputType;
            pattern: string;
            kind: EInputKinds;
            modelValue: string | number;
            name: string;
            placeholder: string;
            heading: string;
            subLabel: string;
            maxlength: string;
            minlength: string;
            focusHandler: (e: FocusEvent) => void;
            autocomplete: EAutocomplete;
        }> & Omit<{
            readonly type: EInputType;
            readonly kind: EInputKinds;
            readonly modelValue: string | number;
            readonly placeholder: string;
            readonly pattern?: string | undefined;
            readonly disabled?: boolean | undefined;
            readonly name?: string | undefined;
            readonly heading?: string | undefined;
            readonly subLabel?: string | undefined;
            readonly maxlength?: string | undefined;
            readonly minlength?: string | undefined;
            readonly focusHandler?: ((e: FocusEvent) => void) | undefined;
            readonly autocomplete?: EAutocomplete | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
            type: {
                type: PropType<EInputType>;
                default: EInputType;
            };
            pattern: {
                type: PropType<string>;
                default: undefined;
            };
            kind: {
                type: PropType<EInputKinds>;
                default: EInputKinds;
            };
            disabled: {
                type: PropType<boolean>;
            };
            modelValue: {
                type: PropType<string | number>;
                required: true;
                default: string;
            };
            name: {
                type: PropType<string>;
                default: undefined;
            };
            placeholder: {
                type: PropType<string>;
                default: string;
            };
            heading: {
                type: PropType<string>;
                default: undefined;
            };
            subLabel: {
                type: PropType<string>;
                default: undefined;
            };
            maxlength: {
                type: PropType<string>;
                default: undefined;
            };
            minlength: {
                type: PropType<string>;
                default: undefined;
            };
            focusHandler: {
                type: PropType<(e: FocusEvent) => void>;
                default: () => undefined;
            };
            autocomplete: {
                type: PropType<EAutocomplete>;
                default: undefined;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, "type" | "pattern" | "kind" | "modelValue" | "name" | "placeholder" | "heading" | "subLabel" | "maxlength" | "minlength" | "focusHandler" | "autocomplete">;
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
            type: {
                type: PropType<EInputType>;
                default: EInputType;
            };
            pattern: {
                type: PropType<string>;
                default: undefined;
            };
            kind: {
                type: PropType<EInputKinds>;
                default: EInputKinds;
            };
            disabled: {
                type: PropType<boolean>;
            };
            modelValue: {
                type: PropType<string | number>;
                required: true;
                default: string;
            };
            name: {
                type: PropType<string>;
                default: undefined;
            };
            placeholder: {
                type: PropType<string>;
                default: string;
            };
            heading: {
                type: PropType<string>;
                default: undefined;
            };
            subLabel: {
                type: PropType<string>;
                default: undefined;
            };
            maxlength: {
                type: PropType<string>;
                default: undefined;
            };
            minlength: {
                type: PropType<string>;
                default: undefined;
            };
            focusHandler: {
                type: PropType<(e: FocusEvent) => void>;
                default: () => undefined;
            };
            autocomplete: {
                type: PropType<EAutocomplete>;
                default: undefined;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
            "update:modelValue": (...args: any[]) => void;
        }, string, {
            type: EInputType;
            pattern: string;
            kind: EInputKinds;
            modelValue: string | number;
            name: string;
            placeholder: string;
            heading: string;
            subLabel: string;
            maxlength: string;
            minlength: string;
            focusHandler: (e: FocusEvent) => void;
            autocomplete: EAutocomplete;
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
        type: {
            type: PropType<EInputType>;
            default: EInputType;
        };
        pattern: {
            type: PropType<string>;
            default: undefined;
        };
        kind: {
            type: PropType<EInputKinds>;
            default: EInputKinds;
        };
        disabled: {
            type: PropType<boolean>;
        };
        modelValue: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        name: {
            type: PropType<string>;
            default: undefined;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        heading: {
            type: PropType<string>;
            default: undefined;
        };
        subLabel: {
            type: PropType<string>;
            default: undefined;
        };
        maxlength: {
            type: PropType<string>;
            default: undefined;
        };
        minlength: {
            type: PropType<string>;
            default: undefined;
        };
        focusHandler: {
            type: PropType<(e: FocusEvent) => void>;
            default: () => undefined;
        };
        autocomplete: {
            type: PropType<EAutocomplete>;
            default: undefined;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    type: {
        type: PropType<EInputType>;
        default: EInputType;
    };
    pattern: {
        type: PropType<string>;
        default: undefined;
    };
    kind: {
        type: PropType<EInputKinds>;
        default: EInputKinds;
    };
    disabled: {
        type: PropType<boolean>;
    };
    modelValue: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    name: {
        type: PropType<string>;
        default: undefined;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    heading: {
        type: PropType<string>;
        default: undefined;
    };
    subLabel: {
        type: PropType<string>;
        default: undefined;
    };
    maxlength: {
        type: PropType<string>;
        default: undefined;
    };
    minlength: {
        type: PropType<string>;
        default: undefined;
    };
    focusHandler: {
        type: PropType<(e: FocusEvent) => void>;
        default: () => undefined;
    };
    autocomplete: {
        type: PropType<EAutocomplete>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {
    type: EInputType;
    pattern: string;
    kind: EInputKinds;
    modelValue: string | number;
    name: string;
    placeholder: string;
    heading: string;
    subLabel: string;
    maxlength: string;
    minlength: string;
    focusHandler: (e: FocusEvent) => void;
    autocomplete: EAutocomplete;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        "prefix-icon"?(_: {}): any;
        "postfix-icon"?(_: {}): any;
        subLabel?(_: {}): any;
    };
});
export default deprecatedDefault;
