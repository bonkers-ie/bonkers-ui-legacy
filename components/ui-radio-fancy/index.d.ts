import { default as UiRadioFancy } from './ui-radio-fancy.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { TIconName } from '../ui-icon';
import { ERadioSizes } from './_typings';

export { UiRadioFancy };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
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
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
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
    }, {
        iconName: TIconName;
        radioSize: ERadioSizes;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }, {}, {}, {}, {}, {
        iconName: TIconName;
        radioSize: ERadioSizes;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
//# sourceMappingURL=index.d.ts.map