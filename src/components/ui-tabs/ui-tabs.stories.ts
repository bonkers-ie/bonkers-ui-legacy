import { ref } from "vue";
import UiTabs from "./ui-tabs.vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-tabs",
	component: UiTabs,
} satisfies Meta<typeof UiTabs>;

export const Default = {
	render: (args) => ({
		components: {
			UiTabs
		},
		setup() {
			const value = ref("Tab1");
			const value2 = ref("Tab1");
			return {
				args,
				value,
				value2
			};
		},
		template: /*html*/`
			<ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
			<br/>
			<ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
		`,
	})
};
