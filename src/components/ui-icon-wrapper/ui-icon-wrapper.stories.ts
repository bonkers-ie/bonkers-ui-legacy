import { UiIconWrapper } from "../ui-icon-wrapper";
import { UiIcon } from "../ui-icon";
import { UiNotificationBadge, EBadgeOrigin } from "../ui-notification-badge";
import { EIconWrapperSizes, EIconWrapperTypes } from "./_typings";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-icon-wrapper",
	component: UiIconWrapper,

	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EIconWrapperTypes),
			description: "The Icon Wrapper kinds",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EIconWrapperSizes),
			description: "The Icon Wrapper sizes",
		},
		default: {
			control: {
				type: "text"
			},
		}
	},
	args: {
		default: "icon",
		size: EIconWrapperSizes.DEFAULT
	},
} satisfies Meta<typeof UiIconWrapper>;

export const Default = {
	render: (args) => ({
		components: {
			UiIconWrapper,
			UiIcon,
			UiNotificationBadge
		},
		setup() {
			return {
				args,
				EBadgeOrigin,
				EIconWrapperSizes,
				EIconWrapperTypes
			};
		},
		template: /*html*/`
			<ui-icon-wrapper :kind="EIconWrapperTypes.PRIMARY" v-bind="args" class="mb-sm">
				<p> {{args.default}} </p>
				<UiNotificationBadge :origin=EBadgeOrigin.OFFSET_TOP_RIGHT>
					1
				</UiNotificationBadge>
			</ui-icon-wrapper>

			<ui-icon-wrapper :kind="EIconWrapperTypes.SECONDARY" v-bind="args" class="mb-sm">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/640px-Emblem-person-blue.svg.png" width="20" height="20" />
			</ui-icon-wrapper>

			<ui-icon-wrapper v-bind="args">
				<ui-icon :icon-name="['far', 'face-smile']" :size=EIconWrapperSizes.SM :style="{color: 'black'}" />
				<UiNotificationBadge slot="badge" :origin=EBadgeOrigin.DEFAULT>
					2
				</UiNotificationBadge>
			</ui-icon-wrapper>
			`
	})
};
