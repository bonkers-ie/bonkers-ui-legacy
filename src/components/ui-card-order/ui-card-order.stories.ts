import { UiTypography, ETypographySizes, ETextWeight } from "../ui-typography";
import UiIcon from "../ui-icon/ui-icon.vue";
import { ICON_DEFAULT } from "../../CONSTANTS";
import { EColors } from "../../_types/colors";
import { ESize } from "../../_types/sizing";
import type { Meta } from "@storybook/vue3";
import UiCardOrder from "./ui-card-order.vue";

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
		pillText: {
			control: {
				type: "text"
			},
			description: "The pill text",
		}

	},
	args: {
		title: "Gas & Electricity",
		pillText: "Electricity only"
	},
} satisfies Meta<typeof UiCardOrder >;

export const Default = {
	render: (args) => ({
		components: {
			UiCardOrder,
			UiTypography,
			UiIcon
		},
		setup() {
			return {
				args,
				ICON_DEFAULT,
				ETypographySizes,
				ETextWeight,
				EColors,
				ESize
			};
		},
		template: /*html*/ `
			<ui-card-order :title="args.title" :icon="ICON_DEFAULT" :pillText="args.pillText">
				<template v-slot:providersImage >
					<div class="card-image w-xxxl h-xxxl bg-secondary-300 rounded-lg flex justify-self-end"></div>
				</template>

				<template v-slot:descriptions>
					<ui-typography :size='ETypographySizes.XS' :kind="EColors.SECONDARY_400" :weight='ETextWeight.BOLD' lineHeight >
						Electric Ireland - Smart EV 20%
					</ui-typography>
					<ui-typography :size='ETypographySizes.XS' :kind='EColors.SECONDARY_400' lineHeight >
						Order Ref: RGPKM3
					</ui-typography>
					<div class="inline-flex">
						<ui-typography :size='ETypographySizes.XS' :kind='EColors.SECONDARY_400' lineHeight>
							Start date: 03/04/24
						</ui-typography>
						<ui-icon
							class="mx-xxs text-secondary-400 w-[8px]"
							:icon-name="['far', 'face-smile']"/>
						<ui-typography :size='ETypographySizes.XS' :kind='EColors.SECONDARY_400' lineHeight>
							End date: 02/04/25
						</ui-typography>
					</div>
					<div class="inline-flex">
						<ui-typography underline :size='ETypographySizes.XS' :kind='EColors.PRIMARY_600' :weight='ETextWeight.SEMI_BOLD' lineHeight class="mr-xxs">
							See details
						</ui-typography>
						<ui-icon
							:icon-name="['far', 'face-smile']"
							class="text-primary-600 w-[12px]"
							/>
					</div>
				</template>
			</ui-card-order>

        `,
	}),
};

export const Smallest = {
	render: (args) => ({
		components: {
			UiCardOrder,
			UiTypography,
			UiIcon
		},
		setup() {
			return {
				args,
				ICON_DEFAULT,
				ETypographySizes,
				ETextWeight,
				EColors,
				ESize
			};
		},
		template: /*html*/ `
			<ui-card-order :title="args.title" :icon="ICON_DEFAULT" :pillText="args.pillText" class="w-[288px]">
				<template v-slot:providersImage >
					<div class="card-image w-xxxl h-xxxl bg-secondary-300 rounded-lg flex justify-self-end"></div>
				</template>

				<template v-slot:descriptions>
					<ui-typography :size='ETypographySizes.XS' :kind="EColors.SECONDARY_400" :weight='ETextWeight.BOLD' lineHeight >
						Electric Ireland - Smart EV 20%
					</ui-typography>
					<ui-typography :size='ETypographySizes.XS' :kind='EColors.SECONDARY_400' lineHeight >
						Order Ref: RGPKM3
					</ui-typography>
					<div class="inline-flex">
						<ui-typography :size='ETypographySizes.XS' :kind='EColors.SECONDARY_400' lineHeight>
							Start date: 03/04/24
						</ui-typography>
						<ui-icon
							class="mx-xxs text-secondary-400 w-[8px]"
							:icon-name="['far', 'face-smile']"/>
						<ui-typography :size='ETypographySizes.XS' :kind='EColors.SECONDARY_400' lineHeight>
							End date: 02/04/25
						</ui-typography>
					</div>
					<div class="inline-flex">
						<ui-typography underline :size='ETypographySizes.XS' :kind='EColors.PRIMARY_600' :weight='ETextWeight.SEMI_BOLD' lineHeight class="mr-xxs">
							See details
						</ui-typography>
						<ui-icon
							:icon-name="['far', 'face-smile']"
							class="text-primary-600 w-[12px]"
							/>
					</div>
				</template>
			</ui-card-order>

        `,
	}),
};
