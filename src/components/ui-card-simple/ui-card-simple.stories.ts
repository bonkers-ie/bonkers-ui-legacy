import UiCardSimple from "./ui-card-simple.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-card-simple",
	component: UiCardSimple,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},

	},
	args: {
		slot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
};

type TComponentProps = InstanceType<typeof UiCardSimple>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiCardSimple },
	setup() {
		return { args };
	},
	template: `
		<ui-card-simple>
			<template v-slot:title>
				I want to borrow for
			</template>
			<p class="mb-md text-center">
				{{args.slot}}
			</p>
			<template v-slot:footerSubtitle>
				Type in or adjust the amount
			</template>
		</ui-card-simple>
	`,
});

export const Default = Template.bind({});
