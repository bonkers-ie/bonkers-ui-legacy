import { ICON_DEFAULT } from "../../CONSTANTS";
import UiDropdown from "./ui-dropdown.vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-dropdown",
	component: UiDropdown,

	argTypes: {},
} satisfies Meta<typeof UiDropdown>;

export const Default = {

	args: {
		iconName: ICON_DEFAULT,
		header: "Tables of content",
		subText: "Some text"
	},

};
