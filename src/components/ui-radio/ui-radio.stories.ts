import UiRadio from "./ui-radio.vue";
import { Story } from "@storybook/vue3";
import { ref } from "vue";
import { ECheckboxJustify } from "../../_types/align";

export default {
	title: "Components/ui-radio",
	component: UiRadio,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		classes: {
			control: { type: "text" },
			description: "The Element classes",
		},
		justify: {
			control: { type: "select" },
			options: Object.values(ECheckboxJustify),
			description: "The Element justify",
		},
		// size: {
		// 	control: { type: "select" },
		// 	options: Object.values(ETypographySizes),
		// 	description: "The Element sizes",
		// },
	},
	args: {
		slot: "Some text",
		justify: ECheckboxJustify.START,
	},
};

type TComponentProps = InstanceType<typeof UiRadio>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiRadio },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		const modelValue = ref("value2");

		return { args, modelValue };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<div :style="{display: 'grid', gridGap: '3px'}"
		>
		<ui-radio v-bind="args" name="radio" value="value1" v-model="modelValue">
			{{args.slot}}
		</ui-radio>
		<ui-radio v-bind="args" name="radio" value="value2" v-model="modelValue">
			{{args.slot}}
		</ui-radio>
		<ui-radio v-bind="args" name="radio" value="value3" v-model="modelValue">
			{{args.slot}}
		</ui-radio>
		<ui-radio v-bind="args" name="radio" value="value4" v-model="modelValue">
			{{args.slot}}
		</ui-radio>
		</div>
	`,
});

export const Default = Template.bind({});
