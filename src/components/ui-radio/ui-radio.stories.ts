import UiRadio from "./ui-radio.vue";
import type { Meta } from "@storybook/vue3";
import { ref } from "vue";
import { EJustify } from "../../_types/align";

export default {
	title: "Components/ui-radio",
	component: UiRadio,
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
	},
} satisfies Meta<typeof UiRadio>;

export const Default = {
	render: (args) => ({
		components: {
			UiRadio
		},
		setup() {
			const modelValue = ref("value4");

			return {
				args,
				modelValue
			};
		},
		// And then the `args` are bound to your component with `v-bind="args"`
		template: /*html*/`
			<div :style="{display: 'grid', gridGap: '3px'}">
				<ui-radio v-bind="args" name="radio" value="value1" v-model="modelValue">
					{{args.default}}
				</ui-radio>
				<ui-radio v-bind="args" name="radio" value="value2" v-model="modelValue">
					{{args.default}}
				</ui-radio>
				<ui-radio v-bind="args" name="radio" value="value3" v-model="modelValue">
					{{args.default}}
				</ui-radio>
				<ui-radio v-bind="args" name="radio" disabled value="value4" v-model="modelValue">
					{{args.default}}
				</ui-radio>
			</div>
		`,
	})
};
