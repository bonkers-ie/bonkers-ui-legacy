import UiIcon from "./ui-icon.vue";
import { ESize } from "../../_types/sizing";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-icon",
	component: UiIcon,
	argTypes: {
		size: {
			control: {
				type: "select"
			},
			options: Object.values(ESize),
			description: "The Element size",
		}

	},
	args: {
		size: ESize.LG,
	},
} satisfies Meta<typeof UiIcon>;

export const Default = {
	args: {
		iconName: ["far", "face-smile"]
	}
};
