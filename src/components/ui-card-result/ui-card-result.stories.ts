import UiCardResult from "./ui-card-result.vue";
import UiTypography, { ETypographySizes, ETextWeight, ETextAlign } from "../ui-typography";
import UiBadge from "../ui-badge";
import UiListItem from "../ui-list-item";
import UiButton, { EButtonTypes } from "../ui-button";
import UiIcon from "../ui-icon";
import { ESize } from "../../_types/sizing";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-card-result",
	component: UiCardResult,
	argTypes: {
		exclusiveText: {
			control: { type: "boolean" },
			description: "Whether to show the exclusive text",
		},
		exclusiveTextBottom: {
			control: { type: "boolean" },
			description: "Whether to show the exclusive text",
		},
	},
	args: {
		slot: "default text",
		exclusiveText: true,
		exclusiveTextBottom: true,
	},
};

type TComponentProps = InstanceType<typeof UiCardResult>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiCardResult, UiTypography, UiBadge, UiListItem, UiButton, UiIcon },
	setup() {
		return { args, ETypographySizes, ETextWeight, ETextAlign, EButtonTypes, ESize };
	},
	template: `
		<ui-card-result
			v-bind="args"
			header="Some header"
			:exclusive-text="args.exclusiveText
				? 'Only available on bonkers.ie'
				: undefined"
			:exclusive-text-bottom="args.exclusiveTextBottom
				? 'The price changes made available on 04/04/2022 has been factored into your results'
				: undefined"
		>
			<template #sidebar>
				<ui-typography :size='ETypographySizes.XXS' line-height>
					Special offer text
				</ui-typography>
			</template>

			<template #default>
				<div class="flex flex-wrap gap-xs mb-xs">
					<ui-badge
						v-for="item in ['10% annual overpayment allowance', 'Flexibility built in', 'Flexibility built in!', 'Flexibility built inas', 'lorem5 aslijdhsdoi ashjd oiahsjdoi ']"
						:icon="['far', 'face-smile']"
						:key="item"
					>
						{{ item }}
					</ui-badge>
				</div>

				<ul>
					<ui-list-item
						v-for="item in 5"
						class="mb-xs"
						:key="item"
						:icon="['far', 'face-smile']"
					>
						Feature item {{ item }}
					</ui-list-item>
				</ul>

				<ui-typography
					:weight="ETextWeight.BOLD"
					:size="ETypographySizes.LG"
					:align="ETextAlign.RIGHT"
					class="mb-xs"
				>
					€1004.63 p/m
				</ui-typography>

				<div class="flex gap-sm">
					<ui-button :kind="EButtonTypes.SECONDARY_OVERLAY">
						<template #prefix>
							<ui-icon
								:icon-name="['far', 'face-smile']"
								:size="ESize.SM"
							/>
						</template>
					</ui-button>

					<ui-button full-width>Some text</ui-button>
				</div>

			</template>
		</ui-card-result>
		`,
});

export const Default = Template.bind({});
