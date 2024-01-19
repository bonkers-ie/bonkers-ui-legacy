import type { Meta } from "@storybook/vue3";
import { UiProgress } from ".";

export default {
	title: "Components/ui-progress",
	component: UiProgress,

	argTypes: {
		min: {
			control: {
				type: "number"
			},
			description: "The minimum value",
		},
		max: {
			control: {
				type: "number"
			},
			description: "The maximum value",
		},
		current: {
			control: {
				type: "number"
			},
		}
	},
	args: {
		min: 0,
		max: 10,
		current: 3,
	},
} satisfies Meta<typeof UiProgress>;

export const Default = {};
