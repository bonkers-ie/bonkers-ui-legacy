import { ref } from "vue";
import UiInputRange from "./ui-input-range.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-input-range",
	component: UiInputRange,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
		min:{
			control: { type: "number" },
			description: "The Element min value",
		},
		max:{
			control: { type: "number" },
			description: "The Element max value",
		},
		step:{
			control: { type: "number" },
			description: "The Element max value",
		}
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
	},
};

type TComponentProps = InstanceType<typeof UiInputRange>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiInputRange },
	setup() {
		const modelValue = ref(50);

		return { args, modelValue };
	},
	template: `
		<ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
		<div>{{ modelValue }}</div>
	`,
});

export const Default = Template.bind({});
