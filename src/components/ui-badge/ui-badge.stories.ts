import UiBadge from "./ui-badge.vue";
import type { Meta } from "@storybook/vue3";
import { EBadgeKind, EBadgeSize } from "./_typings";
import { ICON_DEFAULT } from "../../CONSTANTS";

export default {
	title: "Components/ui-badge",
	component: UiBadge,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EBadgeKind),
			description: "The Element kinds",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EBadgeSize),
			description: "The Element size",
		},
		default: {
			control: {
				type: "text"
			}
		},
		rounded: {
			control: {
				type: "boolean"
			},
			description: "Rounded default",
		},
	},
	args: {
		kind: EBadgeKind.PRIMARY,
		size: EBadgeSize.SMALL,
		default: "hello",
		rounded: false

	}
} satisfies Meta<typeof UiBadge>;

export const Default = {
	args: {
		icon: ICON_DEFAULT,

	},
};
