import UiCheckbox from "./ui-checkbox.vue";
import { EJustify } from "../../_types/align";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-checkbox",
	component: UiCheckbox,

	argTypes: {
		justify: {
			control: {
				type: "select"
			},
			options: Object.values(EJustify),
			description: "The Element justify",
		},
		invertOrder: {
			control: {
				type: "boolean"
			},
			description: "The Element order",
		},
		disabled: {
			control: {
				type: "boolean"
			},
			description: "The Element disabled state",
		},
		modelValue: {
			control: {
				type: "boolean"
			},
			description: "The Element disabled state",
		},

		default: {
			control: {
				type: "text"
			}
		},

	},
	args: {
		default: "Some text",
		justify: EJustify.START,
		invertOrder: false,
		disabled: false,
		modelValue: false,
	},
} satisfies Meta<typeof UiCheckbox>;

export const Default = {
	render: (args) => ({
		components: {
			UiCheckbox
		},
		setup() {
			return {
				args,
			};
		},
		template: /*html*/`
			<ui-checkbox v-bind="args">
				{{args.default}}
			</ui-checkbox>
		`,
	})
};
