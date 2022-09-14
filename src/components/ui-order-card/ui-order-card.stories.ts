import UiOrderCard from "./ui-order-card.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-order-cards",
	component: UiOrderCard,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {

	},

	args: {
		slot: "Some text",
	},
};

type TComponentProps = InstanceType<typeof UiOrderCard>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiOrderCard },
	setup() {

		return { args };
	},

	template: `
	<ui-order-card v-bind="args">
			
			<template v-slot:title>
				Title
			</template>

			<template v-slot:textBody>
				this is the textbody
			</template>

			<template v-slot:footerSubtitle>
				this is the footer
			</template>
		</ui-order-card>

		
	`,
});

export const Default = Template.bind({});
