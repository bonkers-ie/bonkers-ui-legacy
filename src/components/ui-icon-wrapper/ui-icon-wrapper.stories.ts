import UiIconWrapper from "../ui-icon-wrapper";
import UiIcon from "../ui-icon";
import UiNotificationBadge, { EBadgeOrigin } from "../ui-notification-badge";
import { EIconWrapperSizes, EIconWrapperTypes } from "./_typings";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-icon-wrapper",
	component: UiIconWrapper,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EIconWrapperTypes),
			description: "The Icon Wrapper kinds",
		},
		size: {
			control: { type: "select" },
			options: Object.values(EIconWrapperSizes),
			description: "The Icon Wrapper sizes",
		}
	},
	args: {
		slot: "icon",
	},
};

type TComponentProps = InstanceType<typeof UiIconWrapper>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiIconWrapper, UiIcon, UiNotificationBadge },
	setup() {
		return { args, EBadgeOrigin, EIconWrapperSizes, EIconWrapperTypes };
	},
	template: /*html*/`
		<ui-icon-wrapper :kind="EIconWrapperTypes.PRIMARY" v-bind="args" class="mb-sm">
			<p> ${args.slot} </p>
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
});

export const Default = Template.bind({});
