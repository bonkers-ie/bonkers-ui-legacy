import UiProductCard from "./ui-product-card.vue";
import type { Meta } from "@storybook/vue3";
import { UiBadge, EBadgeKind } from "../ui-badge";
import { UiIcon } from "../ui-icon";
import { ESize } from "../../_types/sizing";

export default {
	title: "Components/ui-product-card",
	component: UiProductCard,
	argTypes: {},
	args: {},
} satisfies Meta<typeof UiProductCard>;

export const Default = {
	render: (args) => ({
		components: {
			UiProductCard,
			UiBadge,
			UiIcon
		},
		setup() {
			return {
				args,
				EBadgeKind,
				ESize
			};
		},
		template: /*html*/ `
		<div class="grid grid-cols-2 gap-xxs h-[170px] w-[376px]">
			<ui-product-card>
				<template v-slot:cardIcon>
					<div class="relative mb-sm size-xxxl justify-start rounded-full bg-primary">
						<ui-icon :icon-name="['far', 'face-smile']" class="absolute top-sm left-sm text-white" :size="ESize.LG"></ui-icon>
					</div>
				</template>
				<template v-slot:title>
					Gas & Electricity
				</template>

				<template v-slot:productsSubtitle>
					Dual & single fuel plans
				</template>
			</ui-product-card>



			<div class="relative h-[170px] w-[183px]">

				<ui-product-card>
					<template v-slot:cardIcon>
						<div class="relative mb-sm size-xxxl justify-start rounded-full bg-primary">
							<ui-icon :icon-name="['far', 'face-smile']" class="absolute top-sm left-sm text-white" :size="ESize.LG"></ui-icon>
						</div>
					</template>

					<template v-slot:title>
						Gas & Electricity
					</template>

					<template v-slot:productsSubtitle>
						Dual & single fuel plans
					</template>
				</ui-product-card>
				<div class="absolute right-sm -top-xs">
					<ui-badge
						:kind="EBadgeKind.ACCENT_ALT"
						rounded
					>
						UP TO €586 OFF
					</ui-badge>
				</div>
			</div>
		</div>

		`,
	}),
};

export const Small = {
	render: (args) => ({
		components: {
			UiProductCard,
			UiBadge,
			UiIcon
		},
		setup() {
			return {
				args,
				EBadgeKind,
				ESize
			};
		},
		template: /*html*/ `
		<div class="grid grid-cols-2 gap-xxs h-[215] w-[282px]">
			<ui-product-card>
				<template v-slot:cardIcon>
					<div class="relative mb-sm size-xxxl justify-start rounded-full bg-primary">
						<ui-icon :icon-name="['far', 'face-smile']" class="absolute top-sm left-sm text-white" :size="ESize.LG"></ui-icon>
					</div>
				</template>
				<template v-slot:title>
					Gas & Electricity
				</template>

				<template v-slot:productsSubtitle>
					Dual & single fuel plans
				</template>
			</ui-product-card>



			<div class="relative h-[215] w-[136px]">

				<ui-product-card>
					<template v-slot:cardIcon>
						<div class="relative mb-sm size-xxxl justify-start rounded-full bg-primary">
							<ui-icon :icon-name="['far', 'face-smile']" class="absolute top-sm left-sm text-white" :size="ESize.LG"></ui-icon>
						</div>
					</template>

					<template v-slot:title>
						Gas & Electricity
					</template>

					<template v-slot:productsSubtitle>
						Dual & single fuel plans
					</template>
				</ui-product-card>
				<div class="absolute right-sm -top-xs">
					<ui-badge
						:kind="EBadgeKind.ACCENT_ALT"
						rounded
					>
						UP TO €586 OFF
					</ui-badge>
				</div>
			</div>
		</div>

		`,
	}),
};

export const Large = {
	render: (args) => ({
		components: {
			UiProductCard,
			UiBadge,
			UiIcon
		},
		setup() {
			return {
				args,
				EBadgeKind,
				ESize
			};
		},
		template: /*html*/ `
		<div class="grid grid-cols-2 gap-xxs h-[145px] w-[450px]">
			<ui-product-card class="p-sm">
				<template v-slot:cardIcon>
					<div class="relative mb-xxs size-xl justify-start rounded-full bg-primary">
						<ui-icon :icon-name="['far', 'face-smile']" class="absolute top-xs left-xs text-white" :size="ESize.SM" ></ui-icon>
					</div>
				</template>
				<template v-slot:title>
					Gas & Electricity
				</template>

				<template v-slot:productsSubtitle>
				Save on average €536* on your Gas & Electricity bills
				</template>
			</ui-product-card>



			<div class="relative h-[145px] w-[220px]">

				<ui-product-card class="p-sm">
					<template v-slot:cardIcon>
						<div class="relative mb-xxs size-xl justify-start rounded-full bg-primary">
							<ui-icon :icon-name="['far', 'face-smile']" class="absolute top-xs left-xs text-white" :size="ESize.SM"></ui-icon>
						</div>
					</template>

					<template v-slot:title>
						Gas & Electricity
					</template>

					<template v-slot:productsSubtitle>
					Save on average €536* on your Gas & Electricity bills
					</template>
				</ui-product-card>
				<div class="absolute right-sm -top-xs">
					<ui-badge
						:kind="EBadgeKind.ACCENT_ALT"
						rounded
					>
						UP TO €586 OFF
					</ui-badge>
				</div>
			</div>
		</div>

		`,
	}),
};
