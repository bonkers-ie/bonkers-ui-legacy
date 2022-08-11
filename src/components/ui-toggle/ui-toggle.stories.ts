import UiToggle from "./ui-toggle.vue";
import type { Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-toggle",
	component: UiToggle,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
		disabled: {
			control: { type: "boolean" },
			description: "The Element disabled state",
		}
	},
	args: {
		slot: "default text",
		disabled: false,
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
		<ui-toggle v-bind="args" v-model:model-value="modelValue">
			{{ args.slot }}
		</ui-toggle>
	`,
});

export const Default = Template.bind({});
