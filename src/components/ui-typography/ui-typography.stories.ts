import { ETypographySizes, ETypographyColors, ETextWeight, ETextAlign, ETextTransform } from "./_typings";
import UiTypography from "./ui-typography.vue";
import { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-typography",
	component: UiTypography,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
		is: {
			control: { type: "text" },
			description: "The Element component or tag",
		},
		kind: {
			control: { type: "select" },
			options: Object.values(ETypographyColors),
			description: "The Element kinds",
		},
		weight: {
			control: { type: "select" },
			options: Object.values(ETextWeight),
			description: "The Element weights",
		},
		align: {
			control: { type: "select" },
			options: Object.values(ETextAlign),
			description: "The Element align",
		},
		textTransform: {
			control: { type: "select" },
			options: Object.values(ETextTransform),
			description: "The Element transform",
		},
		lineHeight: {
			control: { type: "boolean" },
			description: "The Element line height 1.6",
		},
		size: {
			control: { type: "select" },
			options: Object.values(ETypographySizes),
			description: "The Element sizes",
		},
	},
	args: {
		slot: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
};

type TComponentProps = InstanceType<typeof UiTypography>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiTypography },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<ui-typography v-bind="args">
			${args.slot}
		</ui-typography>
	`,
});

export const Default = Template.bind({});

Default.args = {
	size: ETypographySizes.XXXXL,
	weight: ETextWeight.REGULAR,
	align: ETextAlign.LEFT,
	lineHeight: true,
	is: "p",
};
