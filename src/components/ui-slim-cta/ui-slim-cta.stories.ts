import UiSlimCta from "../ui-slim-cta";
import UiIcon from "../ui-icon";
import UiRedBadge from "../ui-red-badge";
import { ESize } from "../../_types/sizing";
import UiTypography from "../ui-typography";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-slim-cta",
	component: UiSlimCta,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
	},
};

type TComponentProps = InstanceType<typeof UiSlimCta>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiSlimCta, UiIcon, UiTypography, UiRedBadge },
	setup() {
		return { args, ESize };
	},
	template: `
		<ui-slim-cta v-bind="args">
			<template #slot1>
				<ui-icon :size="ESize.LG" has-green-wrapper :icon-name="['far', 'fa-smile']"/>
			</template>
			<template #slot2>
				<ui-icon :size="ESize.MD" has-grey-wrapper :icon-name="['far', 'fa-smile']" />
			</template>
			<template #slot3>
				<div class=" max-w-max relative">
					<ui-icon :size="ESize.MD" has-grey-wrapper :icon-name="['far', 'fa-smile']" />
					<ui-red-badge>
					1
					</ui-red-badge>
				</div>
			</template>
			<template #slot4>
				<div class=" max-w-max relative">
					<ui-icon :size="ESize.MD" has-grey-wrapper :icon-name="['far', 'fa-smile']" />
					<ui-red-badge :origin="args.origin">
				       1
					</ui-red-badge>
				</div>
			</template>
		</ui-slim-cta>
		`
});

export const Default = Template.bind({});
