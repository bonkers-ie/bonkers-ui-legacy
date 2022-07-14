import UiCardCta from "./ui-card-cta.vue";
import UiIcon from "../../_samples/icon.vue";
import UiTypography from "../ui-typography";
import { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-card-cta",
	component: UiCardCta,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		classes: {
			control: { type: "text" },
			description: "The Element classes",
		},

		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		slot: "Some text",
		invertOrder: false,
		fullWidth: false
	},
};

type TComponentProps = InstanceType<typeof UiCardCta>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiCardCta, UiIcon, UiTypography },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<ui-card-cta v-bind="args">
			<template v-slot:icon>
				<div class="p-sm bg-primary rounded-2xl text-white">
					<ui-icon size="32" />
				</div>
			</template>

			<template v-slot:title>
				Title
			</template>

			<template v-slot:description>
				description
			</template>
		</ui-card-cta>
		`
});

export const Default = Template.bind({});
