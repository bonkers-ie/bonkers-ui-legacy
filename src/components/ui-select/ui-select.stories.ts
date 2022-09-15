import UiSelect from "./ui-select.vue";
import type { Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-select",
	component: UiSelect,
	argTypes: {
		disabled: {
			control: { type: "boolean" },
			description: "The Element disabled state",
		}
	},
	args: {
		slot: "default text",
		disabled: false,
	},
};

type TComponentProps = InstanceType<typeof UiSelect>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiSelect },
	setup() {
		const list = ["Option 1", "Option 2", "Option 3"];
		const valueModel = ref(list[0]);
		return { args, valueModel, list };
	},
	template: /*html*/`
		<ui-select v-bind="args" :list="list" v-model:value="valueModel" heading="heading" subLabel="subLabel">
			<template #postfix-icon>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z" fill="currentColor"/>
				</svg>
			</template>
		</ui-select>
	`,
});

export const Default = Template.bind({});
