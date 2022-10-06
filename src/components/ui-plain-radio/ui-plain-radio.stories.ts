import UiPlainRadio from "./ui-plain-radio.vue";
import { ETypographySizes } from "../ui-typography";
import  EColors  from "../ui-typography";
import type { Story } from "@storybook/vue3";
import { ref } from "vue";


export default {
	title: "Components/ui-plain-radio",
	component: UiPlainRadio, ETypographySizes, EColors,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {

		disabled: {
			control: { type: "boolean" },
		}

	},
	args: {
		slot: "Header",
		slotSub: "Subtitle",
		disabled: false,
	},
};

type TComponentProps = InstanceType<typeof UiPlainRadio>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiPlainRadio },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		const modelValue = ref("value");

		return { modelValue, args, ETypographySizes, EColors,};

	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: /*html*/ `
		<div :style="{display: 'grid', gridGap: '5px'}">
			<ui-plain-radio v-bind="args" name="plain-radio" value="value1" v-model="modelValue">
			<p class="text-sm">{{args.slot}}</p>
				<span></span>
			<p class="text-xs text-secondary-alt-500">{{args.slotSub}}<p>
			</ui-plain-radio>

			<ui-plain-radio v-bind="args" name="plain-radio" value="value2" v-model="modelValue">
			<p class="text-sm">{{args.slot}}</p>
				<span></span>
			<p class="text-xs text-secondary-alt-500">{{args.slotSub}}<p>
			</ui-plain-radio>

		</div>
	`,
});

export const Default = Template.bind({});
