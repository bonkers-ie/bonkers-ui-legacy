import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { default as UiRadioCompact } from './ui-radio-compact.vue';

/**
 * @deprecated The default should not be used at all (look at ui-radio-fancy compact)
 */
export { UiRadioCompact };
/**
 * @deprecated The default should not be used at all
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
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
        modelValue: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        name: {
            type: PropType<string>;
            required: true;
        };
        value: {
            type: PropType<string | number | boolean>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | boolean>;
        required: true;
    };
    name: {
        type: PropType<string>;
        required: true;
    };
    value: {
        type: PropType<string | number | boolean>;
        required: true;
    };
    disabled: {
        type: PropType<boolean>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map