import { ETextAlign, ETextWeight } from '..';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from '../../../../vue/dist/vue.esm-bundler.js';
import UiTableCell from "./ui-table-cell.vue";
export { UiTableCell };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly<ExtractPropTypes<{
        align: {
            type: PropType<ETextAlign>;
        };
        weight: {
            type: PropType<ETextWeight>;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<{
        align: {
            type: PropType<ETextAlign>;
        };
        weight: {
            type: PropType<ETextWeight>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<ExtractPropTypes<{
        align: {
            type: PropType<ETextAlign>;
        };
        weight: {
            type: PropType<ETextWeight>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    align: {
        type: PropType<ETextAlign>;
    };
    weight: {
        type: PropType<ETextWeight>;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        subtext?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map