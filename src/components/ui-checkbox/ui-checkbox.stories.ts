import UiCheckbox from "./ui-checkbox.vue";
import { EJustify } from "../../_types/align";
import type { Meta } from "@storybook/vue3";
import { ECheckboxSizes } from "./_types";

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
		size: {
			control: {
				type: "select"
			},
			options: Object.values(ECheckboxSizes),
			description: "The element size can be SM or MD (MD by default)"
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
		size: ECheckboxSizes.MD
	},
} satisfies Meta<typeof UiCheckbox>;

export const Default = {};
