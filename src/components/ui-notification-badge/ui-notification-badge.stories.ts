import { UiNotificationBadge } from ".";
import type { Meta } from "@storybook/vue3";
import { EBadgeOrigin } from "./_types";

export default {
	title: "Components/ui-notification-badge",
	component: UiNotificationBadge,
	argTypes: {
		origin: {
			control: {
				type: "select"
			},
			options: Object.values(EBadgeOrigin),
			description: "The Element origin",
		},
		default: {
			control: {
				type: "text"
			}
		}
	},
	args: {
		default: "1",
		origin: EBadgeOrigin.OFFSET_TOP_RIGHT,
	},
} satisfies Meta<typeof UiNotificationBadge>;

export const Default = {
	render: (args) => ({
		components: {
			UiNotificationBadge
		},
		setup() {
			return {
				args
			};
		},
		template: /*html*/`
			<div class="relative rounded-full bg-primary w-lg h-lg">
				<ui-notification-badge :origin="args.origin">
					{{args.default}}
				</ui-notification-badge>
			</div>
			`
	})
};
