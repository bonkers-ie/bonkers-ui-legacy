import UiButton from "../ui-button";
import { EButtonSizes, EButtonTypes } from "./_typings";
import { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-button",
	component: UiButton,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		classes: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
			description: "The button size",
		},
		kind: {
			control: { type: "select" },
			options: Object.values(EButtonTypes),
			description: "The button kinds",
		},
		size: {
			control: { type: "select" },
			options: Object.values(EButtonSizes),
			description: "The button sizes",
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "The full width size",
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disabled state",
		},
		slot: {
			control: { type: "text" },
			description: "The slot text or component",
		}
	},
	args: {
		slot: "default text",
	},
};

type TComponentProps = InstanceType<typeof UiButton>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiButton },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<ui-button :classes="args.classes"
				   :kind="args.kind"
				   :size="args.size"
				   :fullWidth="args.fullWidth"
				   :disabled="args.disabled"
		>
		${args.slot}
		</ui-button>`,
});
const TemplateAll: Story<TComponentProps> = () => ({
	components: { UiButton },

	setup() {
		return { EButtonSizes, EButtonTypes };
	},

	template: `
		<div :style="{
			display: 'flex',
			flexWrap: 'wrap'
		}"
		>
		<div
			:style="{margin: '10px'}"
			v-for="kind in EButtonTypes"
			:key="kind"
		>
			<ui-button
				:kind="kind"
				:size="EButtonSizes.MEDIUM"
			>
				{{ kind }}
			</ui-button>
		</div>
		</div>
	`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary.args = {
	...Primary,
	classes: "medium",
	kind: EButtonTypes.PRIMARY,
	size: EButtonSizes.MEDIUM,
	fullWidth: false,
	disabled: false,
};
export const Buttons = TemplateAll.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Buttons.args = {};
