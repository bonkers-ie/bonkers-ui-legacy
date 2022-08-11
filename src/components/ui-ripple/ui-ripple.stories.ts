import UiRipple from "./ui-ripple.vue";
import UiButton from "../ui-button";
import UiTypography from "../ui-typography";

import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-ripple",
	component: UiRipple,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
	},
	args: {
		// slot: "Some text",
	},
};

type TComponentProps = InstanceType<typeof UiRipple>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiRipple },
	setup() {
		return { args };
	},
	template: `
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
const Template2: Story<TComponentProps> = (args) => ({
	components: { UiRipple, UiButton, UiTypography },
	setup() {
		return { args };
	},
	template: `
		<div class="flex">
		<ui-button class-name="relative">
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
