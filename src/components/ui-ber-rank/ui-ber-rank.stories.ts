import UiBerRank from "./ui-ber-rank.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-ber-rank",
	component: UiBerRank,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
		rank:{
			control: { type: "number" },
			description: "The Element rank from 0 to 15",
		}
	},
	args: {
		rank: 0,
	},
};

type TComponentProps = InstanceType<typeof UiBerRank>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiBerRank },
	setup() {
		return { args };
	},
	template: `
		<ui-ber-rank v-bind="args" />
	`,
});

export const Default = Template.bind({});
