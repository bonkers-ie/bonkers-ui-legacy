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
		// color: {
		// 	control: {
		// 		type: "select"
		// 	},
		// 	options: Object.values(EBadgeColor),
		// 	description: "The Element color",
		// },
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
		}
	},
	args: {
		kind: EBadgeKind.PRIMARY,
		size: EBadgeSize.SMALL,
		default: "hello",
	}
} satisfies Meta<typeof UiBadge>;

export const Default = {
	args: {
		icon: ICON_DEFAULT,
	},
};
