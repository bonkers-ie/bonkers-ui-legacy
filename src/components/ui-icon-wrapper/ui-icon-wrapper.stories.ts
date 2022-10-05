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
	template: `
		<ui-icon-wrapper v-bind="args">
			<p> helloo </p>
		</ui-icon-wrapper>
		`
});

export const Default = Template.bind({});
