import UiRedBadge from "../ui-red-badge";
import { ESize } from "../../_types/sizing";
import UiTypography from "../ui-typography";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-red-badge",
	component: UiRedBadge,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
		disabled: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
		disabled: false
	},
};

type TComponentProps = InstanceType<typeof UiRedBadge>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiRedBadge, UiTypography },
	setup() {
		return { args, ESize };
	},
	template: `
		<ui-red-badge v-bind="args" number=1>

		</ui-red-badge>
		`
});

export const Default = Template.bind({});
