import { default as UiToggle } from './ui-toggle.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
export { UiToggle };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
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
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
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
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, true, {}, {}, {
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
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        title?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map