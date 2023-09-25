import { ICON_DEFAULT } from "../../CONSTANTS";
import UiCardCta from "../ui-card-cta";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-card-cta",
	component: UiCardCta,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
} satisfies Meta<typeof UiCardCta>;

export const Default = {
	args: {
		iconName: ICON_DEFAULT,
		slot: "Description",
		invertOrder: false,
		disabled: false,
		title: "Title",
		description: "Description"
	},
};
