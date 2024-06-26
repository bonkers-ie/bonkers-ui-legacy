import { default as UiProgress } from './ui-progress.vue';
import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';

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
    progressText: {
        type: PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    progressText: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    min: number;
    max: number;
    current: number;
    progressText: string;
}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map