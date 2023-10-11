
import { ICON_DEFAULT } from "../../CONSTANTS";
import UiDropdown from "./ui-dropdown.vue";
import type { Meta } from "@storybook/vue3";
import { EDropdownKinds } from "./_typings";

export default {
	title: "Components/ui-dropdown",
	component: UiDropdown,

	argTypes: {
		dropdownKind: {
			control: {
				type: "select"
			},
			options: Object.values(EDropdownKinds),

		},
	},
} satisfies Meta<typeof UiDropdown>;

export const Default = {

	args: {
		iconName: ICON_DEFAULT,
		header: "Tables of content",
		subText: "Bonkers Money Limited, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		dropdownKind: EDropdownKinds.DEFAULT
	},

};

export const Secondary = ()=>({
	components: {
		UiDropdown
	},
	setup() { return {
		args: {
			iconName: ICON_DEFAULT,
			header: "Who are we?",
			subText: "Bonkers Money Limited, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Bonkers Money Limited, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Bonkers Money Limited, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Bonkers Money Limited, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Bonkers Money Limited, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			dropdownKind: EDropdownKinds.SECONDARY
		}
	}; },

	template: `
		<div>
			<ui-dropdown v-bind="args" />
			<ui-dropdown v-bind="args" />

		</div>
	`
});
