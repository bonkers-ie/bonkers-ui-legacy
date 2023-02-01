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
		const modelValue = ref("1");

		return { modelValue, args, ETypographySizes, EColors };

	},

	template: /*html*/ `
		<div :style="{display: 'grid', gridGap: '5px'}">
			<ui-plain-radio
				v-for="item in 2"
				:name="String(item)"
				:key="item"
				:value="String(item)"
				v-model="modelValue"
				:header="args.header"
				:sub-header="args.subHeader"
				title="title"
				:disabled="args.disabled"
			>
			</ui-plain-radio>
		</div>
	`,
});

export const Default = Template.bind({});
