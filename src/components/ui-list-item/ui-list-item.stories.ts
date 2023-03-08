import UiListItem from "./ui-list-item.vue";
import type { Story } from "@storybook/vue3";
import { EListItemSize, EListItemSpacing, EListItemTypes } from "./_types";

export default {
	title: "Components/ui-list-item",
	component: UiListItem,
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EListItemTypes),
			description: "The Element kind",
		},
		size: {
			control: { type: "select" },
			options: Object.values(EListItemSize),
			description: "The Element size"
		},
		spacing: {
			control: { type: "select" },
			options: Object.values(EListItemSpacing),
			description: "The Element spacing"
		},
		title: {
			control: { type: "text" },
			description: "The Element title"
		},
		slot: {
			control: { type: "text" },
			description: "The slot text or component",
		},
	},
	args: {
		title: "default text",
		kind: EListItemTypes.DEFAULT,
		size: EListItemSize.SM,
		spacing: EListItemSpacing.DEFAULT,
		slot: "default slot"
	},
};

type TComponentProps = InstanceType<typeof UiListItem>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiListItem },
	setup() {
		return { args };
	},
	template:/*html*/`
			<ul>
				<ui-list-item v-bind="args" :icon="['far', 'face-smile']" title="title only">
					{{args.slot}}
				</ui-list-item>

				<ui-list-item v-bind="args" :icon="['far', 'face-smile']">
					text only
				</ui-list-item>

				<ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="['far', 'face-smile']">
					{{ args.title }}
				</ui-list-item>

				<ui-list-item v-bind="args" class="compact-list-item"  :icon="['far', 'face-smile']" />
			</ul>
	`,
});

export const Default = Template.bind({});
