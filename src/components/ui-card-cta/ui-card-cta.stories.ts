import UiCardCta from "../ui-card-cta";
import UiIcon from "../ui-icon";
import { ESize } from "../../_types/sizing";
import UiTypography from "../ui-typography";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-card-cta",
	component: UiCardCta,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},

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
	components: { UiCardCta, UiIcon, UiTypography },
	setup() {
		return { args, ESize };
	},
	template: `
		<ui-card-cta v-bind="args">
			<template v-slot:icon>
				<ui-icon :size="ESize.MD" has-wrapper class-name="text-white" :icon-name="['far', 'fa-face-smile']" />
			</template>

			<template v-slot:title>
				Title
			</template>

			<template v-slot:description>
				{{args.slot}}
			</template>
		</ui-card-cta>
		`
});

export const Default = Template.bind({});
