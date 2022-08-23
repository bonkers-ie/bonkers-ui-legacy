import UiToggle from "./ui-toggle.vue";
import type { Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-toggle",
	component: UiToggle,
	argTypes: {
		disabled: {
			control: { type: "boolean" },
			description: "The Element disabled state",
		},
		alignCenter: {
			control: { type: "boolean" },
			description: "The Elements center align state",
		},
		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order state",
		}
	},
	args: {
		slot: "default text",
		disabled: false,
		invertOrder: false,
		alignCenter: false,
	},
};

type TComponentProps = InstanceType<typeof UiToggle>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiToggle },
	setup() {
		const modelValue = ref(false);

		return { args, modelValue };
	},
	template: `
		<ui-toggle v-bind="args" v-model="modelValue" header="Header" :title="args.slot" />
	`,
});

export const Default = Template.bind({});
