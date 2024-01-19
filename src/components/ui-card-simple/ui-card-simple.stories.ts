import UiCardSimple from "./ui-card-simple.vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-card-simple",
	component: UiCardSimple,
	argTypes: {
		default: {
			control: {
				type: "text"
			}
		}
	},
	args: {
		default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
} satisfies Meta<typeof UiCardSimple>;

export const Default = {
	render: (args) => ({
		components: {
			UiCardSimple
		},
		setup() {
			return {
				args
			};
		},
		template: /*html*/`

			<ui-card-simple>
				<template v-slot:title>
					I want to borrow for
				</template>
				<p class="mb-md text-center">
					{{args.default}}
				</p>
				<template v-slot:footerSubtitle>
					Type in or adjust the amount
				</template>
			</ui-card-simple>
		`,
	})
};
