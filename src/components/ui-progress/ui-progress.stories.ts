import { computed } from "vue";
import type { Meta } from "@storybook/vue3";
import { UiProgress } from ".";

export default {
	title: "Components/ui-progress",
	component: UiProgress,

	argTypes: {
		min: {
			control: {
				type: "number",
			},
			description: "The minimum value",
		},
		max: {
			control: {
				type: "number",
			},
			description: "The maximum value",
		},
		current: {
			control: {
				type: "number",
			},
		},
		progressText: {
			control: {
				type: "text",
			},
		},
	},
	args: {
		min: 0,
		max: 10,
		current: 3,
		progressText: "Step 3 of 10",
	},
} satisfies Meta<typeof UiProgress>;

export const Default = {
	args: {
		current: 4,
	},
	render: (args) => ({
		components: {
			UiProgress,
		},
		setup: () => {
			const progressText = computed(() => {
				return `Step ${args.current} of ${args.max}`;
			});
			return {
				args,
				progressText,
			};
		},
		template: /*html*/ `<ui-progress v-bind="args" :progressText="progressText"></ui-progress>`,
	}),
};
