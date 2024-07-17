import UiProductCard from "./ui-product-card.vue";
import type { Meta } from "@storybook/vue3";
import { UiIcon } from "../ui-icon";
import { ESize } from "../../_types/sizing";
import {
	UiTypography,
	ETextWeight,
	ETextAlign,
	ETypographySizes

} from "../ui-typography";

export default {
	title: "Components/ui-product-card",
	component: UiProductCard,
	argTypes: {
		title: {
			control: {
				type: "text"
			},
			description: "The title text",
		},
		subtitle: {
			control: {
				type: "text"
			},
			description: "The subtitle text",
		},
	},
	args: {
		title: "This is a Title",
		subtitle: "This iStay inside all the price changes across product supplierss a Subtitle",
	},
} satisfies Meta<typeof UiProductCard>;

export const Default = {
	render: (args) => ({
		components: {
			UiProductCard,
			UiIcon
		},
		setup() {
			return {
				args,
				ESize
			};
		},
		template: /*html*/ `
			<ui-product-card :title="args.title" :subtitle="args.subtitle">
				<template v-slot:header>
					<div class="rounded-full bg-primary p-sm flex w-fit text-white">
						<ui-icon :icon-name="['far', 'face-smile']" :size="ESize.LG"></ui-icon>
					</div>
				</template>
			</ui-product-card>
		`,
	}),
};

export const Variants = {
	render: (args) => ({
		components: {
			UiProductCard,
			UiIcon
		},
		setup() {
			return {
				args,
				ESize
			};
		},
		template: /*html*/ `
		<div class="grid grid-cols-2 gap-xs w-[412px]">
			<ui-product-card :title="args.title" :subtitle="args.subtitle">
				<template v-slot:header>
					<div class="rounded-full bg-primary p-sm flex w-fit text-white">
						<ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
					</div>
				</template>
			</ui-product-card>

			<ui-product-card :title="args.title" :subtitle="args.subtitle" badgeText="UP TO €586 OFF">
				<template v-slot:header>
					<div class="rounded-full bg-primary p-xxs flex w-fit text-white">
						<ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
					</div>
				</template>
			</ui-product-card>
		</div>
		`,
	}),
};

export const MediaCard = {
	render: (args) => ({
		components: {
			UiProductCard,
			UiTypography,
			UiIcon
		},
		setup() {
			return {
				args,
				ESize,
				ETextWeight,
				ETextAlign,
				ETypographySizes
			};
		},
		template: /*html*/ `
		<div class="grid grid-cols-2 gap-xs w-[356px]">


			<ui-product-card class="!p-0 !gap-0" >
			<template v-slot:header>
				<div class="relative bg-warning h-[100px] rounded-t-2xl "></div>
				<div class="px-xs">
				<div class="absolute rounded-full bg-primary p-xxs flex w-fit text-white top-1/4 mt-xs">
					<ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
				</div>
				</div>
					<div class="px-xs py-sm grid gap-xxs h-fit">
						<ui-typography
							:size="ETypographySizes.MD"
							:weight="ETextWeight.SEMI_BOLD"
							:align="ETextAlign.LEFT"
							line-height
						>
							Price change calendar
						</ui-typography>

						<ui-typography
							:size="ETypographySizes.XS"
							:align="ETextAlign.LEFT"
							line-height
						>
							Stay inside all the price changes across product suppliers
						</ui-typography>
					</div>


			</template>
			</ui-product-card>

			<ui-product-card class="!p-0 !gap-0" >
			<template v-slot:header>
				<div class="relative bg-warning h-[100px] rounded-t-2xl "></div>
					<div class="px-xs py-sm grid gap-xxs h-fit">
						<ui-typography
							:size="ETypographySizes.MD"
							:weight="ETextWeight.SEMI_BOLD"
							:align="ETextAlign.LEFT"
							line-height
						>
							Price change calendar
						</ui-typography>

						<ui-typography
							:size="ETypographySizes.XS"
							:align="ETextAlign.LEFT"
							line-height
						>
							Stay inside all the price changes across product suppliers
						</ui-typography>
					</div>


			</template>
			</ui-product-card>





		</div>


		`,
	}),
};
