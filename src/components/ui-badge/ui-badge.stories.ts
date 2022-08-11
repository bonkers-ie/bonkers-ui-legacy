import UiBadge from "./ui-badge.vue";
import type { Story } from "@storybook/vue3";
import { EBadgeKind, EBadgeSize } from "./_typings";

export default {
	title: "Components/ui-badge",
	component: UiBadge,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
		kind: {
			control: { type: "select" },
			options: Object.values(EBadgeKind),
			description: "The Element kinds",
		},
		size: {
			control: { type: "select" },
			options: Object.values(EBadgeSize),
			description: "The Element size",
		}
	},
	args: {
		slot: "default text",
		kind: EBadgeKind.PRIMARY,
		size: EBadgeSize.SMALL,
	},
};

type TComponentProps = InstanceType<typeof UiBadge>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiBadge },
	setup() {
		return { args };
	},
	template: `
		<ui-badge :icon="['far', 'face-smile']" v-bind="args">
			{{ args.slot }}
		</ui-badge>
	`,
});

export const Default = Template.bind({});
