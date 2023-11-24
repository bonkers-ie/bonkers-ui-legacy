import { ESkeletonKind } from './_typings';
import { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from './vue/dist/vue.esm-bundler.js';
import UiSkeleton from "./ui-skeleton.vue";
export { UiSkeleton };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    kind: {
        type: PropType<ESkeletonKind>;
        default: ESkeletonKind;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    kind: {
        type: PropType<ESkeletonKind>;
        default: ESkeletonKind;
    };
}>>, {
    kind: ESkeletonKind;
}, {}>;
export default deprecatedDefault;
