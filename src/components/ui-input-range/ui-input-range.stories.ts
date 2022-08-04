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
	},
	args: {
		hasWrapper: false,
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
		<ui-input-range v-bind="args" min="0" max="100" step="1" v-model:modelValue="modelValue"/>
	`,
});

export const Default = Template.bind({});
