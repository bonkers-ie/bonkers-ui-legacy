import UiOrderCard from "./ui-order-card.vue";
import type { Story } from "@storybook/vue3";
import { EOrderCardTypes } from "./_types";

export default {
	title: "Components/ui-order-card",
	component: UiOrderCard,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EOrderCardTypes),
			description: "The Element kinds",
		},
	},

	args: {
		slot: "But we still need your gas and electricity meter readings before processing it.",
		kind: EOrderCardTypes.DEFAULT
	},
};

type TComponentProps = InstanceType<typeof UiOrderCard>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiOrderCard },
	setup() {

		return { args };
	},

	template: /*html*/`
		<ui-order-card v-bind="args" :iconName="['far', 'fa-face-smile']">
			<template #title>
				Thank you for your order!
			</template>

			<template #textBody>
				{{args.slot}}
			</template>

			<template #footer>
				We’ll send a confirmation email to william.moran@bonkers.ie
			</template>
		</ui-order-card>

		
	`,
});

export const Default = Template.bind({});
