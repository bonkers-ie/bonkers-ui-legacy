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
		disabled: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
		disabled: false,
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
				<ui-icon :size="ESize.LG" has-wrapper class="text-white" :icon-name="['far', 'fa-smile']"/>
			</template>
			<template #slot2>
				<ui-icon :size="ESize.MD" has-grey-wrapper class="text-black" :icon-name="['far', 'fa-smile']" />
			</template>
			<template #slot3>
				<div class="relative">
					<ui-icon :size="ESize.MD" has-grey-wrapper class="text-black" :icon-name="['far', 'fa-smile']" />
					<ui-red-badge number=1 />
				</div>
			</template>
			<template #slot4>
				<div class="relative">
					<ui-icon :size="ESize.MD" has-grey-wrapper class="text-black" :icon-name="['far', 'fa-smile']" />
					<ui-red-badge number=1 />
				</div>
			</template>
		</ui-slim-cta>
		`
});

export const Default = Template.bind({});
