import UiListItem from "./ui-list-item.vue";
import type { Story } from "@storybook/vue3";
import { EListItemTypes } from "./_types";

export default {
	title: "Components/ui-list-item",
	component: UiListItem,
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EListItemTypes),
			description: "The Element title",
		}
	},
	args: {
		slot: "some description",
		title: "default text",
		kind: EListItemTypes.DEFAULT
	},
};

type TComponentProps = InstanceType<typeof UiListItem>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiListItem },
	setup() {
		return { args };
	},
	template:`
			<ul>
				<ui-list-item :icon="['far', 'face-smile']" :title="args.title" :kind="args.kind">
					{{ args.slot }}
				</ui-list-item>
				<ui-list-item :icon="['far', 'face-smile']" :title="args.title" :kind="args.kind">
					{{ args.title }}
				</ui-list-item>
				<ui-list-item :icon="['far', 'face-smile']" :title="args.title" :kind="args.kind">
					{{ args.title }}
				</ui-list-item>
			</ul>
	`,
});

export const Default = Template.bind({});
