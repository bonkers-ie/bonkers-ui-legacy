import { default as UiBerRank } from './ui-ber-rank.vue';
import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';
import { EBerSize } from './_types';
export { UiBerRank };
export { EBerSize } from './_types';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    size: {
        type: PropType<EBerSize>;
        default: EBerSize;
    };
    rank: {
        type: PropType<number | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15">;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    size: {
        type: PropType<EBerSize>;
        default: EBerSize;
    };
    rank: {
        type: PropType<number | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15">;
        required: true;
    };
}>>, {
    size: EBerSize;
}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map