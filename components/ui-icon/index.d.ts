import { default as UiIcon } from './ui-icon.vue';
import { DefineComponent, PropType, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from '../../../vue/dist/vue.esm-bundler.js';
import { ESize } from '../../_types/sizing';
import { TIconName } from './_typings';
export { UiIcon };
export { ESize } from '../../_types/sizing';
export { EIconType } from './_typings';
export type { TIconName } from './_typings';
/**
 * @deprecated The default should not be used - use named import as - import {[name]} from "ui/[name]"
 */
declare const deprecatedDefault: DefineComponent<{
    size: {
        type: PropType<ESize>;
        default: ESize;
    };
    iconName: {
        type: PropType<TIconName>;
        required: true;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    size: {
        type: PropType<ESize>;
        default: ESize;
    };
    iconName: {
        type: PropType<TIconName>;
        required: true;
    };
}>>, {
    size: ESize;
}, {}>;
export default deprecatedDefault;
//# sourceMappingURL=index.d.ts.map