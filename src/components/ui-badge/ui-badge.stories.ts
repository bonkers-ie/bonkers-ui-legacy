import UiBadge from "./ui-badge.vue";
import type { Story } from "@storybook/vue3";
import { EBadgeKind, EBadgeSize } from "./_typings";

export default {
	title: "Components/ui-badge",
	component: UiBadge,
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EBadgeKind),
			description: "The Element kinds",
		},
		size: {
			control: { type: "select" },
			options: Object.values(EBadgeSize),
			description: "The Element size",
		},
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
	template: /*html*/`
		<ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
			{{ args.slot }}
		</ui-badge>
	`,
});

export const Default = Template.bind({});
