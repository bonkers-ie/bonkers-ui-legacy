import type { Meta } from "@storybook/vue3";
import { ICON_DEFAULT } from "./../../CONSTANTS";
import { EAlertTypes } from "./_types";
import UiAlert from "../ui-alert";

export default {
	title: "Components/ui-alert",
	component: UiAlert,

	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EAlertTypes),
			description: "The button kinds",
		},
		default: {
			control: { type: "text" },
		}
	},
} satisfies Meta<typeof UiAlert>;

export const Default = {
	args: {
		icon: ICON_DEFAULT,
		default: "This is a default slot"
	},
};
