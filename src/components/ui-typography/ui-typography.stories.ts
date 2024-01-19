import { ETypographySizes, ETextWeight, ETextAlign, ETextTransform } from "./_typings";
import { UiTypography } from ".";
import type { Meta } from "@storybook/vue3";
import { EColors } from "../../_types/colors";

export default {
	title: "Components/ui-typography",
	component: UiTypography,
	argTypes: {
		is: {
			control: {
				type: "text"
			},
			description: "The Element component or tag",
		},
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EColors),
			description: "The Element kinds",
		},
		weight: {
			control: {
				type: "select"
			},
			options: Object.values(ETextWeight),
			description: "The Element weights",
		},
		align: {
			control: {
				type: "select"
			},
			options: Object.values(ETextAlign),
			description: "The Element align",
		},
		textTransform: {
			control: {
				type: "select"
			},
			options: Object.values(ETextTransform),
			description: "The Element transform",
		},
		lineHeight: {
			control: {
				type: "boolean"
			},
			description: "The Element line height 1.6",
		},
		underline: {
			control: {
				type: "boolean"
			},
			description: "The Element underline",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(ETypographySizes),
			description: "The Element sizes",
		},
		default: {
			control: {
				type: "text"
			}
		},
	},
	args: {
		default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		underline: false,
		size: ETypographySizes.LG,
		lineHeight: true,
		textTransform: undefined,
		align: undefined,
		weight: undefined,
		is: "p"
	},
} satisfies Meta<typeof UiTypography>;

export const Default = {
	render: (args) => ({
		components: {
			UiTypography
		},
		setup() {
			return {
				args
			};
		},
		template: /*html*/`
			<ui-typography v-bind="args">
				${args.default}
			</ui-typography>
		`,
	})
};
