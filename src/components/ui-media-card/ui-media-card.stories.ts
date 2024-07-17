import UiMediaCard from "./ui-media-card.vue";
import type { Meta } from "@storybook/vue3";
import { ESize } from "../../_types/sizing";
import { ICON_DEFAULT } from "../../CONSTANTS";

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

	},
} satisfies Meta<typeof UiMediaCard >;

export const Default = {
	render: (args) => ({
		components: {
			UiMediaCard
		},
		setup() {
			return {
				args,
				ESize,
				ICON_DEFAULT
			};
		},
		template: /*html*/ `
			<ui-media-card :title="args.title" :description="args.description" :icon="ICON_DEFAULT">
			</ui-media-card>
		`,
	}),
};

export const Variant = {
	render: (args) => ({
		components: {
			UiMediaCard
		},
		setup() {
			return {
				args,
				ESize
			};
		},
		template: /*html*/ `
			<ui-media-card :title="args.title" :description="args.description" class="w-[172px]">
			</ui-media-card>
		`,
	}),
};
