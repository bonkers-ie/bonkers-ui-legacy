import UiToggle from "./ui-toggle.vue";
import type { Meta } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-toggle",
	component: UiToggle,
	argTypes: {
		disabled: {
			control: {
				type: "boolean"
			},
			description: "The Element disabled state",
		},
		alignCenter: {
			control: {
				type: "boolean"
			},
			description: "The Elements center align state",
		},
		invertOrder: {
			control: {
				type: "boolean"
			},
			description: "The Element order state",
		},
		header: {
			control: {
				type: "text"
			}
		},
		title: {
			control: {
				type: "text"
			}
		},
		model: {
			control: {
				type: "boolean"
			}
		}
	},
	args: {
		disabled: false,
		invertOrder: false,
		alignCenter: false,
		title: "title",
		header: "header",
		model: true
	},
} satisfies Meta<typeof UiToggle>;

export const Default = {
	render: (args) => ({
		components: {
			UiToggle
		},
		setup() {
			const modelValue = ref(false);

			return {
				args,
				modelValue
			};
		},
		template: /*html*/`
			<ui-toggle v-bind="args" v-model="args.model" />
		`,
	})
};
