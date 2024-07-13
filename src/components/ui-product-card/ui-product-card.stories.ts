import UiProductCard from "./ui-product-card.vue";
import type { Meta } from "@storybook/vue3";
import { UiIcon } from "../ui-icon";
import { ESize } from "../../_types/sizing";

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
		subtitle: "This is a Subtitle",
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
