import { UiCardSimple } from "../ui-card-simple";
import {
	UiTypography,
	ETextWeight,
	ETextAlign,
	ETypographySizes,
	EColors,
} from "../ui-typography";
import { UiButton, EButtonSizes } from "../ui-button";
import { UiBadge, EBadgeKind } from "../ui-badge";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-card-simple",
	component: UiCardSimple,
	argTypes: {
		default: {
			control: {
				type: "text",
			},
		},
	},
	args: {
		default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
} satisfies Meta<typeof UiCardSimple>;

export const Default = {
	render: (args) => ({
		components: {
			UiCardSimple,
		},
		setup() {
			return {
				args,
			};
		},
		template: /*html*/ `

			<ui-card-simple>
				<template v-slot:title>
					I want to borrow for
				</template>
				<p class="mb-md text-center">
					{{args.default}}
				</p>
				<template v-slot:footer>
					Type in or adjust the amount
				</template>
			</ui-card-simple>
		`,
	}),
};

export const Featured = {
	render: (args) => ({
		components: {
			UiCardSimple,
			UiTypography,
			UiButton,
			UiBadge
		},
		setup() {
			return {
				args,
				ETextWeight,
				ETextAlign,
				ETypographySizes,
				EColors,
				EButtonSizes,
				EBadgeKind
			};
		},
		template: /*html*/ `

		<div class="grid grid-cols-2 gap-xxs w-[448px]">
			<ui-card-simple>
				<div class="grid gap-xxs justify-items-center">
					<div class="card-image w-xxxl h-xxxl bg-secondary-300"></div>

					<ui-typography
						:weight="ETextWeight.SEMI_BOLD"
						:align="ETextAlign.CENTER"
						:size="ETypographySizes.XS"
						lineHeight
					>
						Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline
					</ui-typography>

					<div>
						<ui-typography
							:weight="ETextWeight.SEMI_BOLD"
							:align="ETextAlign.CENTER"
							lineHeight
						>
							€77.00*
						</ui-typography>

						<ui-typography
							:align="ETextAlign.CENTER"
							:size="ETypographySizes.XS"
							lineHeight
							:kind="EColors.SECONDARY_300"
						>
							monthly
						</ui-typography>
					</div>

					<ui-badge
						:kind="EBadgeKind.ACCENT_ALT"
						rounded
					>
						Save €150 on first year
					</ui-badge>

					<ui-button fullWidth :size="EButtonSizes.MEDIUM">
						<ui-typography
							:size="ETypographySizes.XS"
						>
							SEE DETAILS
						</ui-typography>
					</ui-button>
				</div>
			</ui-card-simple>

			<ui-card-simple>
			<div class="grid gap-xxs justify-items-center">
			<div class="card-image w-xxxl h-xxxl bg-secondary-300"></div>

			<ui-typography
				:weight="ETextWeight.SEMI_BOLD"
				:align="ETextAlign.CENTER"
				:size="ETypographySizes.XS"
				lineHeight
			>
				Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline
			</ui-typography>

			<div>
				<ui-typography
					:weight="ETextWeight.SEMI_BOLD"
					:align="ETextAlign.CENTER"
					lineHeight
				>
					€77.00*
				</ui-typography>

				<ui-typography
					:align="ETextAlign.CENTER"
					:size="ETypographySizes.XS"
					lineHeight
					:kind="EColors.SECONDARY_300"
				>
					monthly
				</ui-typography>
			</div>

			<ui-button fullWidth :size="EButtonSizes.MEDIUM">
				<ui-typography
					:size="ETypographySizes.XS"
				>
					SEE DETAILS
				</ui-typography>
			</ui-button>

			</div>
				</ui-card-simple>
			</div>
		`,
	}),
};
