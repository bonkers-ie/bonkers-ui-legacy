import UiRipple from "./ui-ripple.vue";
import { UiButton } from "../ui-button";
import { UiTypography } from "../ui-typography";

import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-ripple",
	component: UiRipple,
} satisfies Meta<typeof UiRipple>;

const Template = (args) => ({
	components: {
		UiRipple
	},
	setup() {
		return {
			args
		};
	},
	template: /*html*/`
		<div
			:style="{
				width: '500px',
				height: '500px',
				border: '2px solid red',
			}"
			 class="relative">
			<ui-ripple v-bind="args" />
		</div>
		`,
});
const Template2 = (args) => ({
	components: {
		UiRipple,
		UiButton,
		UiTypography
	},
	setup() {
		return {
			args
		};
	},
	template: /*html*/`
		<div class="flex">
			<ui-button class="relative">
				<ui-typography is="div">
					<ui-ripple v-bind="args" />
					hello world
				</ui-typography>
			</ui-button>
		</div>
		`,
});

export const Default = Template.bind({});
export const WithButton = Template2.bind({});
