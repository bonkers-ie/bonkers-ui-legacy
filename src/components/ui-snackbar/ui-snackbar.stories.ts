import { ESnackbarTypes } from "./_types";
import type { Meta } from "@storybook/vue3";
import { UiSnackbar } from "../ui-snackbar";

export default {
	title: "Components/ui-snackbar",
	component: UiSnackbar,

	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(ESnackbarTypes),
			description: "The button kinds",
		},
		title: {
			controls: {
				type: "text"
			},
		},
		articleSlot: {
			controls: {
				type: "text"
			},
		},
	},
	args: {
		articleSlot: "This is an article",
		title: "This is a title",
		kind: ESnackbarTypes.DEFAULT
	}
} satisfies Meta<typeof UiSnackbar>;

export const Default = {
	render: (args) => ({
		components: {
			UiSnackbar
		},
		setup() {
			return {
				args
			};
		},
		template: /*html*/`
			<ui-snackbar v-bind="args">
				<template #articleSlot>{{args.articleSlot}}</template>
			</ui-snackbar>
		`,
	})
};
