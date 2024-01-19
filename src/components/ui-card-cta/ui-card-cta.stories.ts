import { ICON_DEFAULT } from "../../CONSTANTS";
import { UiCardCta } from "../ui-card-cta";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-card-cta",
	component: UiCardCta,
	args: {
		invertOrder: false,
		disabled: false,
		title: "Title",
		description: "Description"
	},
} satisfies Meta<typeof UiCardCta>;

export const Default = {
	args: {
		iconName: ICON_DEFAULT,
	}
};
