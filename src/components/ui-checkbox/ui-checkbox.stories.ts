import UiCheckbox from "./ui-checkbox.vue";
import type { Story } from "@storybook/vue3";
import { ref } from "vue";
import { EJustify } from "../../_types/align";

export default {
	title: "Components/ui-checkbox",
	component: UiCheckbox,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
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

	},
	args: {
		slot: "Some text",
		justify: EJustify.START,
		invertOrder: false,
		disabled: false,
		modelValue: false,
	},
};

type TComponentProps = InstanceType<typeof UiCheckbox>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: {
		UiCheckbox 
	},
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		const modelValue = ref(true);

		return {
			args,
			modelValue 
		};
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<ui-checkbox v-bind="args" v-model="modelValue">
			${args.slot}
		</ui-checkbox>
	`,
});

export const Default = Template.bind({});
