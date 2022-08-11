import { ref } from "vue";
import UiTabs from "./ui-tabs.vue";
import type { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-tabs",
	component: UiTabs,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
	},
};

type TComponentProps = InstanceType<typeof UiTabs>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiTabs },
	setup() {
		const value = ref("Tab1");
		const value2 = ref("Tab1");
		return { args, value, value2 };
	},
	template: `
		<ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
		<br/>
		<ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
	`,
});

export const Default = Template.bind({});
