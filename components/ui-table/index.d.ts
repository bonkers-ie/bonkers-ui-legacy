import { default as UiTable } from './ui-table.vue';
import { CreateComponentPublicInstance, ExtractPropTypes, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComponentOptionsBase } from 'vue';
import { ETableKind } from './_types';
export { UiTable };
export { ETextAlign, ETextWeight } from '../ui-typography';
export { UiTableCell } from './ui-table-cell';
export { UiTableRow, ERowKind } from './ui-table-row';
export { ETableKind } from './_types';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: {
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<ETableKind>;
            default: ETableKind;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<ETableKind>;
            default: ETableKind;
        };
    }>>, {
        kind: ETableKind;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        kind: {
            type: PropType<ETableKind>;
            default: ETableKind;
        };
    }>>, {}, {}, {}, {}, {
        kind: ETableKind;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    kind: {
        type: PropType<ETableKind>;
        default: ETableKind;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    kind: ETableKind;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map