import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';
import UiProgress from "./ui-progress.vue";
export { UiProgress };
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    min: {
        type: PropType<number>;
        required: true;
        default: number;
    };
    max: {
        type: PropType<number>;
        required: true;
        default: number;
    };
    current: {
        type: PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    min: {
        type: PropType<number>;
        required: true;
        default: number;
    };
    max: {
        type: PropType<number>;
        required: true;
        default: number;
    };
    current: {
        type: PropType<number>;
        required: true;
        default: number;
    };
}>>, {
    min: number;
    max: number;
    current: number;
}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map