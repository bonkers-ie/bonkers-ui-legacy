import { ref } from "vue";
import UiRadioFancy from "./ui-radio-list-fancy.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-radio-list-fancy",
	component: UiRadioFancy,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},

	},
	args: {},
};

type TComponentProps = InstanceType<typeof UiRadioFancy>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiRadioFancy },
	setup() {
		const modelValue = ref("1");
		const handleChange = (value: string) => {
			modelValue.value = value;
		};

		return { args, modelValue, handleChange };
	},
	template: `
		<ui-radio-fancy v-bind="args" v-model="modelValue" name="radio" @update:model-value="handleChange">
			{{args.slot}}
		</ui-radio-fancy>
	`,
});

export const Default = Template.bind({});
