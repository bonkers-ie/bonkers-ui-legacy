import UiAlert from "./ui-alert.vue";
import type { Story } from "@storybook/vue3";
import { EAlertTypes } from "./_types";

export default {
	title: "Components/ui-alert",
	component: UiAlert,
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EAlertTypes),
			description: "The button kinds",
		},
	},
	args: {
		slot: "some description text: lorem",
		kind: EAlertTypes.WARNING
	}
};

type TComponentProps = InstanceType<typeof UiAlert>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiAlert },
	setup() {
		return { args };
	},
	template: `
		<ui-alert
			:kind="args.kind"
			:icon="['far', 'face-smile']"
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
		</ui-alert>
	`
});

export const Default = Template.bind({});
