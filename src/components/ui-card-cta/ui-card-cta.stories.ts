import UiCardCta from "../ui-card-cta";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-card-cta",
	component: UiCardCta,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
		disabled: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
		disabled: false
	},
};

type TComponentProps = InstanceType<typeof UiCardCta>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiCardCta },
	setup() {
		return { args };
	},
	template: /*html*/ `
		<ui-card-cta v-bind="args" :icon-name="['far', 'face-smile']">
			<template #title>
				Title
			</template>

			<template #description>
				{{args.slot}}
			</template>
		</ui-card-cta>
		`
});

export const Default = Template.bind({});
