import UiBadge from "./ui-badge.vue";
import type { Meta } from "@storybook/vue3";
import { EBadgeColor, EBadgeKind, EBadgeSize } from "./_typings";

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
		color: {
			control: {
				type: "select"
			},
			options: Object.values(EBadgeColor),
			description: "The Element color",
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
		}
	},
	args: {
		kind: EBadgeKind.DEFAULT,
		color: EBadgeColor.PRIMARY,
		size: EBadgeSize.SMALL,
		default: "hello"
	}
} satisfies Meta<typeof UiBadge>;

export const Default = {
	render: (args) => ({
		components: {
			UiBadge
		},
		setup() {
			return {
				args,
			};
		},
		template: /*html*/`
			<ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
				{{args.default}}
			</ui-badge>
		`,
	})
};
