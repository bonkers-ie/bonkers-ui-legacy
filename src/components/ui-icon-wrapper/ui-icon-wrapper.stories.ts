import UiIconWrapper from "../ui-icon-wrapper";
import UiIcon from "../ui-icon";
import UiRedBadge, { EBadgeOrigin } from "../ui-red-badge";
import { ESize } from "../../_types/sizing";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-icon-wrapper",
	component: UiIconWrapper,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
	},
};

type TComponentProps = InstanceType<typeof UiIconWrapper>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiIconWrapper, UiIcon, UiRedBadge },
	setup() {
		return { args, ESize, EBadgeOrigin };
	},
	template: /*html*/`
		<ui-icon-wrapper kind="primary" fitContent badge v-bind="args">
			<UiRedBadge slot="badge" :origin=EBadgeOrigin.OFFSET_TOP_RIGHT :value="10" />
			<p slot="default"> helloo </p>
		</ui-icon-wrapper>
		<ui-icon-wrapper kind="secondary" v-bind="args">
			<img slot="default" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/640px-Emblem-person-blue.svg.png" width="20" height="20" />
		</ui-icon-wrapper>
		`
});

export const Default = Template.bind({});
