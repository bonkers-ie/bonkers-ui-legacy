import UiOrderCard from "./ui-order-card.vue";
import type { Meta } from "@storybook/vue3";
import { EOrderCardTypes } from "./_types";

export default {
	title: "Components/ui-order-card",
	component: UiOrderCard,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EOrderCardTypes),
			description: "The Element kinds",
		},
		textBody: {
			control: {
				type: "text"
			}
		},
		title: {
			control: {
				type: "text"
			}
		},
		footer: {
			control: {
				type: "text"
			}
		},
	},

	args: {
		title: "Thank you for your order!",
		textBody: "But we still need your gas and electricity meter readings before processing it.",
		footer: "footer: But we still need your gas and electricity meter readings before processing it.",
		kind: EOrderCardTypes.DEFAULT
	}
} satisfies Meta<typeof UiOrderCard>;

export const Default = {
	render: (args) => ({
		components: {
			UiOrderCard
		},
		setup() {
			return {
				args
			};
		},

		template: /*html*/`
			<ui-order-card v-bind="args" :iconName="['far', 'face-smile']">
				<template #title>
					{{args.title}}
				</template>

				<template #textBody>
					{{args.textBody}}
				</template>

				<template #footer>
					{{args.footer}}
				</template>
			</ui-order-card>
		`,
	})
};
