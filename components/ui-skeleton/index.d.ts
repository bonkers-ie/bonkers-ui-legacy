import { default as UiSkeleton } from './ui-skeleton.vue';
import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';
import { ESkeletonKind } from './_typings';
export { UiSkeleton };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    kind: {
        type: PropType<ESkeletonKind>;
        default: ESkeletonKind;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    kind: {
        type: PropType<ESkeletonKind>;
        default: ESkeletonKind;
    };
}>>, {
    kind: ESkeletonKind;
}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map