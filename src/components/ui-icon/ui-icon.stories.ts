import UiIcon from "./ui-icon.vue";
import type { Story } from "@storybook/vue3";
import { ESize } from "../../_types/sizing";

export default {
	title: "Components/ui-icon",
	component: UiIcon,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		hasGreenWrapper:{
			control: { type: "boolean" },
			description: "The Icon show wrapper",
		},
		size: {
			control: { type: "select" },
			options: Object.values(ESize),
			description: "The Element size",
		}

	},
	args: {
		size: ESize.LG,
		hasGreenWrapper: false,
	},
};

type TComponentProps = InstanceType<typeof UiIcon>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiIcon },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<ui-icon v-bind="args" :icon-name="['far', 'fa-face-smile']" />
	`,
});

export const Default = Template.bind({});
