import { TIconName } from './_typings';
import { ESize } from '../../_types/sizing';
import { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from './vue/dist/vue.esm-bundler.js';
import UiIcon from "./ui-icon.vue";
export { UiIcon };
export { ESize } from "../../_types/sizing";
export { EIconType } from "./_typings";
export type { TIconName } from "./_typings";
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
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
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
