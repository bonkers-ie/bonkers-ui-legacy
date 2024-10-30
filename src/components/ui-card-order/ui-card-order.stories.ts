import { UiTypography, ETypographySizes, ETextWeight } from "../ui-typography";
import UiIcon from "../ui-icon/ui-icon.vue";
import { ICON_DEFAULT } from "../../CONSTANTS";
import { EColors } from "../../_types/colors";
import { ESize } from "../../_types/sizing";
import type { Meta } from "@storybook/vue3";
import UiCardOrder from "./ui-card-order.vue";
import { UiBadge, EBadgeSize } from "../ui-badge";

export default {
	title: "Components/ui-card-order",
	component: UiCardOrder ,
	argTypes: {
		title: {
			control: {
				type: "text"
			},
			description: "The title text",
		},
		contentHeader: {
			control: {
				type: "text"
			},
			description: "The contentHeader text",
		}
	},
	args: {
		title: "Gas & Electricity",
		contentHeader: "Electric Ireland - Smart EV 20%"
	},
} satisfies Meta<typeof UiCardOrder >;

export const Default = {
	render: (args) => ({
		components: {
			UiCardOrder,
			UiTypography,
			UiBadge,
			UiIcon
		},
		setup() {
			return {
				args,
				ICON_DEFAULT,
				ETypographySizes,
				ETextWeight,
				EColors,
				ESize,
				EBadgeSize
			};
		},
		template: /*html*/ `
			<ui-card-order
				:title="args.title"
				:icon="ICON_DEFAULT"
				:contentHeader="args.contentHeader"
			>
				<template v-slot:subtitle>
					<ui-badge
						:size="EBadgeSize.SMALL"
						:icon="ICON_DEFAULT"
					>
						badge text
					</ui-badge>
				</template>

				<template v-slot:providersImage >
					<div class="size-xxxl bg-secondary-300 rounded-lg" />
				</template>

				<template v-slot:descriptions>
					<p>Order Ref: RGPKM3</p>
					<p>Start date: 03/04/24 &bull; End date: 02/04/25</p>
				</template>

				<template v-slot:footer>
					<ui-typography
						underline
						:size='ETypographySizes.XS'
						:kind='EColors.PRIMARY_600'
						:weight='ETextWeight.SEMI_BOLD'
						lineHeight
						class="flex items-center gap-xxs"
					>
						<span>See details</span>

						<ui-icon
							:kind="EColors.PRIMARY_600"
							:icon-name="ICON_DEFAULT"
						/>
					</ui-typography>
				</template>
			</ui-card-order>
		`,
	}),
};
