import UiIconList from "./ui-list-item.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-list-item",
	component: UiIconList,
	argTypes: {},
	args: {
		slot: "default text",
	}
};

type TComponentProps = InstanceType<typeof UiIconList>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiIconList },
	setup() {
		return { args };
	},
	template: `
		<ul>
			<ui-icon-list :icon="['far', 'face-smile']">
				{{args.slot}}
			</ui-icon-list>
			<ui-icon-list :icon="['far', 'face-smile']">
				{{args.slot}}
			</ui-icon-list>
			<ui-icon-list :icon="['far', 'face-smile']">
				{{args.slot}}
			</ui-icon-list>
		</ul>
	`
});

export const Default = Template.bind({});
