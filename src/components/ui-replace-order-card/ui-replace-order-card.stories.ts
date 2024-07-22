import UiReplaceCardOrder from "./ui-replace-order-card.vue";
import type { Meta } from "@storybook/vue3";
import { ICON_DEFAULT } from "../../CONSTANTS";

export default {
	title: "Components/ui-replace-card-order",
	component: UiReplaceCardOrder ,
	argTypes: {
		title: {
			control: {
				type: "text"
			},
			description: "The title text",
		},
		pillText: {
			control: {
				type: "text"
			},
			description: "The pill text",
		},

	},
	args: {
		title: "Gas & Electricity",
		pillText: "Electricity only"

	},
} satisfies Meta<typeof UiReplaceCardOrder >;

export const Default = {
	render: (args) => ({
		components: {
			UiReplaceCardOrder
		},
		setup() {
			return {
				args,
				ICON_DEFAULT

			};
		},
		template: /*html*/ `
			<ui-replace-card-order :title="args.title" :icon="ICON_DEFAULT" :pillText="args.pillText">
				<template v-slot:providersImage >
					<div class="card-image w-xxxl h-xxxl bg-secondary-300 rounded-lg flex justify-end"></div>
				</template>
			</ui-replace-card-order>

        `,
	}),
};
