import UiListItem from "./ui-list-item.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-list-item",
	component: UiListItem,
	argTypes: {
		description: {
			control: { type: "text" },
			title: "The Element title",
		}
	},
	args: {
		slot: "some description text: lorem",
		title: "default text",
	}
};

type TComponentProps = InstanceType<typeof UiListItem>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiListItem },
	setup() {
		return { args };
	},
	template: `
		<ul class="grid gap-sm">
			<ui-list-item :icon="['far', 'face-smile']" :title="args.title">
			</ui-list-item>
			<ui-list-item :icon="['far', 'face-smile']" :title="args.title">
				{{args.slot}}
			</ui-list-item>
			<ui-list-item :icon="['far', 'face-smile']" :title="args.title">
			</ui-list-item>
		</ul>
	`
});

export const Default = Template.bind({});
