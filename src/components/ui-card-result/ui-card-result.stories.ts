import { EColors } from "./../../_types/colors";
import { UiCardResult } from "../ui-card-result";
import { UiTypography, ETypographySizes, ETextWeight, ETextAlign } from "../ui-typography";
import { UiBadge } from "../ui-badge";
import { UiListItem } from "../ui-list-item";
import { UiButton, EButtonTypes } from "../ui-button";
import { UiIcon } from "../ui-icon";
import { ESize } from "../../_types/sizing";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-card-result",
	component: UiCardResult,
	argTypes: {
		header: {
			control: {
				type: "text"
			},
			description: "Header text",
		},
		exclusiveText: {
			control: {
				type: "text"
			},
			description: "Whether to show the exclusive text",
		},
		exclusiveTextBottom: {
			control: {
				type: "text"
			},
			description: "Whether to show the exclusive text",
		},
	},
	args: {
		header: "header header header",
		exclusiveText: "Only available on bonkers.ie",
		exclusiveTextBottom: "Only available on bonkers.ie",
	},
} satisfies Meta <typeof UiCardResult>;

export const Default = {
	render: (args) => ({
		components: {
			UiCardResult,
			UiTypography,
			UiBadge,
			UiListItem,
			UiButton,
			UiIcon
		},
		setup() {
			return {
				args,
				ETypographySizes,
				ETextWeight,
				ETextAlign,
				EButtonTypes,
				ESize,
				EColors
			};
		},
		template:
		/*html*/`
			<ui-card-result
				v-bind="args"
			>
				<template #sidebar>
					<div class="flex gap-sm">
						<ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center p-sm text-center">
							Special offer text
						</ui-typography>

						<ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center p-sm text-center">
							Special offer text
						</ui-typography>
					</div>
				</template>

				<template #default>
					<div
						class="flex gap-xxs items-center mb-xxs"
					>
						<ui-icon
							class="text-primary"
							:size="ESize.SM"
							:icon-name="['far', 'face-smile']"
						/>

						<ui-icon
							class="text-primary"
							:size="ESize.SM"
							:icon-name="['far', 'face-smile']"
						/>

						<ui-icon
							class="text-secondary-alt-300"
							:size="ESize.SM"
							:icon-name="['far', 'face-smile']"
						/>
					</div>

					<div class="flex flex-wrap gap-xxs mb-sm">
						<ui-badge
							v-for="item in ['Free bank tranfers']"
							:icon="['far', 'face-smile']"
							:key="item"
						>
							{{ item }}
						</ui-badge>

						<ui-badge
							:icon="['far', 'face-smile']"
							more
						>
							more...
						</ui-badge>
					</div>

					<ul>
						<ui-list-item
							v-for="item in 4"
							class="mb-xxxs items-center"
							:key="item"
							:icon="['far', 'face-smile']"
							icon-class="text-secondary-alt"
						>
							<p>
								<ui-typography is="span" :weight="ETextWeight.BOLD">
									{{item}}
								</ui-typography>

								<span> Feature item</span>
							</p>
						</ui-list-item>
					</ul>

					<div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm mb-sm">
						<ui-typography underline :size="ETypographySizes.SM" :kind="EColors.ACCENT">
							Full Details
						</ui-typography>

						<ui-typography
							class="text-right"
							:weight="ETextWeight.BOLD"
							:size="ETypographySizes.XL"
							:kind="EColors.SECONDARY"
						>
							<p class="mb-xxxs">€1004.63</p>
							<ui-typography
								:size="ETypographySizes.XS"
								:kind="EColors.SECONDARY_400"
							>
								Monthly fee
							</ui-typography>
						</ui-typography>
					</div>
					<ui-button full-width>Some text</ui-button>
				</template>
			</ui-card-result>

			`,
	})
};
