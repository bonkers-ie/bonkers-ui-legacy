import { Story } from "@storybook/vue3";
import UiInput from "./ui-input.vue";
import Icon from "../../_samples/icon.vue";
import { ref } from "vue";
import { EInputTypes } from "./_typings";

export default {
	title: "Components/ui-input",
	component: UiInput,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		classes: {
			control: { type: "text" },
			description: "Custom class",
		},
		placeholder: {
			control: { type: "text" },
			description: "Placeholder",
		},
		kind: {
			control: { type: "select" },
			options: Object.values(EInputTypes),
			description: "The input kinds",
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		placeholder: "Placeholder",
		fullWidth: false
	}
};

type MyComponentProps = InstanceType<typeof UiInput>["$props"];

const Template: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiInput
	},
	setup(){
		const valueModel = ref("");
		return{
			args,
			valueModel
		};
	},
	template: `
		<ui-input v-bind="args" v-model="valueModel" />
	`
});

const TemplateAll: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiInput,
		Icon
	},
	setup(){
		const valueModel = ref("");

		return{
			args,
			valueModel
		};
	},
	template: `
		<div :style="{
			display: 'grid',
			gridGap: '12px'
		}">
			<ui-input v-bind="args" v-model="valueModel">
				<template v-slot:prefix-icon> € </template>
			</ui-input>
			<ui-input v-bind="args" v-model="valueModel">
				<template v-slot:prefix-icon>
					<icon :size="16" />
				</template>
			</ui-input>
			<ui-input v-bind="args" v-model="valueModel">
				<template v-slot:postfix-icon>
					<icon :size="16" />
				</template>
			</ui-input>
		</div>
	`
});

export const Default = Template.bind({});
export const AllInputs = TemplateAll.bind({});
