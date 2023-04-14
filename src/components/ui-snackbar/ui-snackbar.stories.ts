import { ESnackbarTypes } from "./_types";
import type { Meta } from "@storybook/vue3";
import UiSnackbar from "../ui-snackbar";

export default {
	title: "Components/ui-snackbar",
	component: UiSnackbar,

	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(ESnackbarTypes),
			description: "The button kinds",
		},
		title: {
			controls: { type: "text" },
		},
	}
} satisfies Meta<typeof UiSnackbar>;

export const Default = {
	args: {
		title: "This is a title",
		articleSlot: "This is an article",
	},
};
