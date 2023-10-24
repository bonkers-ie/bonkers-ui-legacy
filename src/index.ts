import { App, defineComponent } from "vue";
import * as UiAlert from "./components/ui-alert";
import * as UiBadge from "./components/ui-badge";
import * as UiBerRank from "./components/ui-ber-rank";
import * as UiButton from "./components/ui-button";
import * as UiCardCta from "./components/ui-card-cta";
import * as UiCardResult from "./components/ui-card-result";
import * as UiCardSimple from "./components/ui-card-simple";
import * as UiCheckbox from "./components/ui-checkbox";
import * as UiIcon from "./components/ui-icon";
import * as UiIconWrapper from "./components/ui-icon-wrapper";
import * as UiInput from "./components/ui-input";
import * as UiInputRange from "./components/ui-input-range";
import * as UiListItem from "./components/ui-list-item";
import * as UiModal from "./components/ui-modal";
import * as UiNotificationBadge from "./components/ui-notification-badge";
import * as UiOrderCard from "./components/ui-order-card";
import * as UiPlainRadio from "./components/ui-plain-radio";
import * as UiProgress from "./components/ui-progress";
import * as UiRadio from "./components/ui-radio";
import * as UiRadioCompact from "./components/ui-radio-compact";
import * as UiRadioFancy from "./components/ui-radio-fancy";
import * as UiResultCardRange from "./components/ui-result-card-range";
import * as UiRipple from "./components/ui-ripple";
import * as UiSelect from "./components/ui-select";
import * as UiSkeleton from "./components/ui-skeleton";
import * as UiSnackbar from "./components/ui-snackbar";
import * as UiTable from "./components/ui-table";
import * as UiTabs from "./components/ui-tabs";
import * as UiToggle from "./components/ui-toggle";
import * as UiTypography from "./components/ui-typography";
import * as UiVerificationInput from "./components/ui-verification-input";
// import * as UiSlider from "./components/ui-slider";

const Components: Record<string, ReturnType<typeof defineComponent>> = {
	UiAlert,
	UiBadge,
	UiBerRank,
	UiButton,
	UiCardCta,
	UiCardResult,
	UiCardSimple,
	UiCheckbox,
	UiIcon,
	UiIconWrapper,
	UiInput,
	UiInputRange,
	UiListItem,
	UiModal,
	UiNotificationBadge,
	UiOrderCard,
	UiPlainRadio,
	UiProgress,
	UiRadio,
	UiRadioCompact,
	UiRadioFancy,
	UiResultCardRange,
	UiRipple,
	UiSelect,
	UiSkeleton,
	//UiSlider,
	UiSnackbar,
	UiTable,
	UiTabs,
	UiToggle,
	UiTypography,
	UiVerificationInput
};

function install(Vue: App) {
	for (const component in Components) {
		Vue.component(Components[component].name, Components[component]);
	}
}

export default {
	install
};

export { default as UiAlert, EAlertTypes } from "./components/ui-alert";
export { default as UiBadge, EBadgeKind, EBadgeSize } from "./components/ui-badge";
export { default as UiBerRank, EBerSize } from "./components/ui-ber-rank";
export { default as UiButton, EButtonSizes, EButtonTypes } from "./components/ui-button";
export { default as UiCardCta } from "./components/ui-card-cta";
export { default as UiCardResult } from "./components/ui-card-result";
export { default as UiCardSimple } from "./components/ui-card-simple";
export { default as UiCheckbox } from "./components/ui-checkbox";
export { default as UiIcon, ESize } from "./components/ui-icon";
export { default as UiIconWrapper, EIconWrapperTypes, EIconWrapperSizes } from "./components/ui-icon-wrapper";
export { default as UiInput, EInputType, EInputKinds, EAutocomplete } from "./components/ui-input";
export { default as UiInputRange } from "./components/ui-input-range";
export { default as UiListItem, EListItemTypes, EListItemSpacing, EListItemSize } from "./components/ui-list-item";
export { default as UiModal, EModalSizes } from "./components/ui-modal";
export { default as UiNotificationBadge, EBadgeOrigin } from "./components/ui-notification-badge";
export { default as UiOrderCard } from "./components/ui-order-card";
export { default as UiPlainRadio } from "./components/ui-plain-radio";
export { default as UiProgress } from "./components/ui-progress";
export { default as UiRadio } from "./components/ui-radio";
export { default as UiRadioCompact } from "./components/ui-radio-compact";
export { default as UiRadioFancy } from "./components/ui-radio-fancy";
export { default as UiResultCardRange } from "./components/ui-result-card-range";
export { default as UiRipple } from "./components/ui-ripple";
export { default as UiSelect } from "./components/ui-select";
export { default as UiSkeleton } from "./components/ui-skeleton";
export { default as UiSnackbar,  ESnackbarTypes  } from "./components/ui-snackbar";
export { UiTable, UiTableCell, UiTableRow, ETableKind, ERowKind } from "./components/ui-table";
export { default as UiTabs } from "./components/ui-tabs";
export { default as UiToggle } from "./components/ui-toggle";
export { default as UiTypography, EColors, ETypographySizes, ETextWeight, ETextAlign, ETextTransform } from "./components/ui-typography";
export { default as UiVerificationInput } from "./components/ui-verification-input";

export type { TIconName } from "./components/ui-icon";
