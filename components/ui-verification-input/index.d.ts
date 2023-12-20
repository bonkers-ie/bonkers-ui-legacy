import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from './vue/dist/vue.esm-bundler.js';
import UiVerificationInput from "./ui-verification-input.vue";
export { UiVerificationInput };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        inputsCount: {
            type: PropType<number>;
            required: true;
        };
        type: {
            type: PropType<"text">;
        };
    }>> & {
        onOnFiled?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onFiled: (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        inputsCount: {
            type: PropType<number>;
            required: true;
        };
        type: {
            type: PropType<"text">;
        };
    }>> & {
        onOnFiled?: ((...args: any[]) => any) | undefined;
    }, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        inputsCount: {
            type: PropType<number>;
            required: true;
        };
        type: {
            type: PropType<"text">;
        };
    }>> & {
        onOnFiled?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    inputsCount: {
        type: PropType<number>;
        required: true;
    };
    type: {
        type: PropType<"text">;
    };
}>> & {
    onOnFiled?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onFiled: (...args: any[]) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        button?(_: {}): any;
    };
});
export default deprecatedDefault;
