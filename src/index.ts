import { type App, defineComponent } from "vue";
import * as types from "./types";
import * as UiAlert from "./components/ui-alert";
import * as UiBackdrop from "./components/ui-modal/ui-backdrop";
import * as UiBadge from "./components/ui-badge";
import * as UiBerRank from "./components/ui-ber-rank";
import * as UiButton from "./components/ui-button";
import * as UiCardCta from "./components/ui-card-cta";
import * as UiCardResult from "./components/ui-card-result";
import * as UiCardSimple from "./components/ui-card-simple";
import * as UiCheckbox from "./components/ui-checkbox";
import * as UiDropdown from "./components/ui-dropdown";
import * as UiFeaturedCard from "./components/ui-featured-card";
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
import * as UiTableCell from "./components/ui-table/ui-table-cell";
import * as UiTableRow from "./components/ui-table/ui-table-row";
import * as UiTabs from "./components/ui-tabs";
import * as UiToggle from "./components/ui-toggle";
import * as UiTypography from "./components/ui-typography";
import * as UiVerificationInput from "./components/ui-verification-input";

const Components: Record<string, ReturnType<typeof defineComponent>> = {
	UiAlert,
	UiBackdrop,
	UiBadge,
	UiBerRank,
	UiButton,
	UiCardCta,
	UiCardResult,
	UiCardSimple,
	UiCheckbox,
	UiDropdown,
	UiFeaturedCard,
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
	UiTableCell,
	UiTableRow,
	UiTabs,
	UiToggle,
	UiTypography,
	UiVerificationInput,
	types
};

// for use with global app.use() in consumer project
const BonkersUI = {
	install(app: App) {
		Object.keys(Components).forEach((component) => {
			app.component(Components[component].name, Components[component]);
		});
	}
};

export default BonkersUI;

export { UiAlert, EAlertTypes } from "./components/ui-alert";
export { UiBackdrop } from "./components/ui-modal/ui-backdrop";
export { UiBadge, EBadgeKind, EBadgeSize } from "./components/ui-badge";
export { UiBerRank, EBerSize } from "./components/ui-ber-rank";
export { UiButton, EButtonSizes, EButtonTypes } from "./components/ui-button";
export { UiCardCta } from "./components/ui-card-cta";
export { UiCardResult } from "./components/ui-card-result";
export { UiCardSimple } from "./components/ui-card-simple";
export { UiCheckbox } from "./components/ui-checkbox";
export { UiDropdown, EDropdownKinds } from "./components/ui-dropdown";
export { UiFeaturedCard } from "./components/ui-featured-card";
export { UiIcon, ESize } from "./components/ui-icon";
export { UiIconWrapper, EIconWrapperTypes, EIconWrapperSizes } from "./components/ui-icon-wrapper";
export { UiInput, EInputType, EInputKinds, EAutocomplete } from "./components/ui-input";
export { UiInputRange } from "./components/ui-input-range";
export { UiListItem, EListItemTypes, EListItemSpacing, EListItemSize } from "./components/ui-list-item";
export { UiModal, EModalSizes } from "./components/ui-modal";
export { UiNotificationBadge, EBadgeOrigin } from "./components/ui-notification-badge";
export { UiOrderCard } from "./components/ui-order-card";
export { UiPlainRadio } from "./components/ui-plain-radio";
export { UiProgress } from "./components/ui-progress";
export { UiRadio } from "./components/ui-radio";
export { UiRadioCompact } from "./components/ui-radio-compact";
export { UiRadioFancy } from "./components/ui-radio-fancy";
export { UiResultCardRange } from "./components/ui-result-card-range";
export { UiRipple } from "./components/ui-ripple";
export { UiSelect } from "./components/ui-select";
export { UiSkeleton } from "./components/ui-skeleton";
export { UiSnackbar,  ESnackbarTypes  } from "./components/ui-snackbar";
export { UiTable, ETableKind, ERowKind } from "./components/ui-table";
export { UiTableCell } from "./components/ui-table/ui-table-cell";
export { UiTableRow } from "./components/ui-table/ui-table-row";
export { UiTabs } from "./components/ui-tabs";
export { UiToggle } from "./components/ui-toggle";
export { UiTypography, EColors, ETypographySizes, ETextWeight, ETextAlign, ETextTransform } from "./components/ui-typography";
export { UiVerificationInput } from "./components/ui-verification-input";
