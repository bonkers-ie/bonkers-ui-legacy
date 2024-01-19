import { ref } from "vue";
import UiInputRange from "./ui-input-range.vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-input-range",
	component: UiInputRange,
	argTypes: {
		min: {
			control: {
				type: "number"
			},
			description: "The Element min value",
		},
		max: {
			control: {
				type: "number"
			},
			description: "The Element max value",
		},
		step: {
			control: {
				type: "number"
			},
			description: "The Element max value",
		}
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
	},
} satisfies Meta<typeof UiInputRange>;

export const Default = {
	render: (args) => ({
		components: {
			UiInputRange
		},
		setup() {
			const modelValue = ref(50);

			return {
				args,
				modelValue
			};
		},
		template: /*html*/`
			<div :style="{border: '1px solid'}">
				<ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
			</div>
			<div>{{ modelValue }}</div>
		`,
	})
};
