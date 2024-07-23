import UiMediaCard from "./ui-media-card.vue";
import type { Meta } from "@storybook/vue3";
import { ICON_DEFAULT } from "../../CONSTANTS";

const PLACEHOLDER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Stock_Price_Listing_Numbers_on_a_Korean_Newspaper.jpg";

export default {
	title: "Components/ui-media-card",
	component: UiMediaCard ,
	argTypes: {
		title: {
			control: {
				type: "text"
			},
			description: "The title text",
		},
		description: {
			control: {
				type: "text"
			},
			description: "The subtitle text",
		},
	},
	args: {
		title: "This is a Title",
		description: "This is a Subtitle",
		image: PLACEHOLDER_IMAGE,
		icon: ICON_DEFAULT

	},
} satisfies Meta<typeof UiMediaCard >;

export const Default = {};

export const Variant = {
	render: (args) => ({
		components: {
			UiMediaCard
		},
		setup() {
			return {
				args,
				PLACEHOLDER_IMAGE
			};
		},
		template: /*html*/ `
			<div class="grid gap-xxs w-[344px] grid-cols-2">
				<ui-media-card :title="args.title" :icon="args.icon" :description="args.description" :image="PLACEHOLDER_IMAGE" />
				<ui-media-card :title="args.title" description="Super long description Super long description Super long description Super long description Super long description Super long description Super long description" :image="PLACEHOLDER_IMAGE" />
			</div>
		`,
	}),
};
