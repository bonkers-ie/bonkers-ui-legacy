import UiCardCta from "../ui-card-cta";
import UiIcon from "../ui-icon";
import UiIconWrapper from "../ui-icon-wrapper";
import { ESize } from "../../_types/sizing";
import UiTypography from "../ui-typography";
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
	components: { UiCardCta, UiIcon, UiTypography, UiIconWrapper },
	setup() {
		return { args, ESize };
	},
	template: /*html*/ `
		<ui-card-cta v-bind="args">
			<template #icon>
				<ui-icon-wrapper>
					<ui-icon :icon-name="['far', 'fa-face-smile']" :size=ESize.MD />
				</ui-icon-wrapper>
			</template>
				<template #title>
					Title
				</template>
				<template #description>
					{{args.slot}}
				</template>
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
