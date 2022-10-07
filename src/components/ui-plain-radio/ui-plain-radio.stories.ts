import UiPlainRadio from "./ui-plain-radio.vue";
import { ETypographySizes } from "../ui-typography";
import  EColors  from "../ui-typography";
import type { Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-plain-radio",
	component: UiPlainRadio, ETypographySizes, EColors,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		disabled: {
			control: { type: "boolean" },
		},
		header: {
			control: { type: "text" },
		},
		subHeader: {
			control: { type: "text" },
		}
	},
	args: {
		disabled: false,
		header: "Header",
		subHeader: "SubHeader"
	},
};

type TComponentProps = InstanceType<typeof UiPlainRadio>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiPlainRadio },

	setup() {
		const modelValue = ref("value1");

		return { modelValue, args, ETypographySizes, EColors };

	},

	template: /*html*/ `
		<div :style="{display: 'grid', gridGap: '5px'}">
			<ui-plain-radio
				v-bind="args"
				name="plain-radio"
				value="value1"
				v-model="modelValue"
				:header="args.header"
				:sub-header="args.subHeader"
			/>
			<ui-plain-radio
				v-bind="args"
				name="plain-radio"
				value="value2"
				v-model="modelValue"
				:header="args.header"
				:sub-header="args.subHeader"
			/>
		</div>
	`,
});

export const Default = Template.bind({});
