import { ESnackbarTypes } from './_types';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../vue/dist/vue.esm-bundler.js';
import { default as UiSnackbar } from './ui-snackbar.vue';

export { UiSnackbar };
export { ESnackbarTypes } from './_types';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            required: true;
        };
        kind: {
            type: PropType<ESnackbarTypes>;
            default: ESnackbarTypes;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            required: true;
        };
        kind: {
            type: PropType<ESnackbarTypes>;
            default: ESnackbarTypes;
        };
    }>>, {
        kind: ESnackbarTypes;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            required: true;
        };
        kind: {
            type: PropType<ESnackbarTypes>;
            default: ESnackbarTypes;
        };
    }>>, {}, {}, {}, {}, {
        kind: ESnackbarTypes;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        required: true;
    };
    kind: {
        type: PropType<ESnackbarTypes>;
        default: ESnackbarTypes;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    kind: ESnackbarTypes;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        titleSlot?(_: {}): any;
        articleSlot?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map