import { default as UiSnackbar } from './ui-snackbar.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from 'vue';
import { ESnackbarTypes } from './_types';
export { UiSnackbar };
export { ESnackbarTypes } from './_types';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<ESnackbarTypes>;
            default: ESnackbarTypes;
        };
        title: {
            type: PropType<string>;
            required: true;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<ESnackbarTypes>;
            default: ESnackbarTypes;
        };
        title: {
            type: PropType<string>;
            required: true;
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
        kind: {
            type: PropType<ESnackbarTypes>;
            default: ESnackbarTypes;
        };
        title: {
            type: PropType<string>;
            required: true;
        };
    }>>, {}, {}, {}, {}, {
        kind: ESnackbarTypes;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    kind: {
        type: PropType<ESnackbarTypes>;
        default: ESnackbarTypes;
    };
    title: {
        type: PropType<string>;
        required: true;
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