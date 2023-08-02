import UiButton from "../ui-button";
import UiIcon from "../ui-icon";
import { ESize } from "../../_types/sizing";
import { EButtonSizes, EButtonTypes } from "./_typings";
import type { Story } from "@storybook/vue3";
export default {
	title: "Components/ui-button",
	component: UiButton,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		kind: {
			control: {
				type: "select" 
			},
			options: Object.values(EButtonTypes),
			description: "The button kinds",
		},
		size: {
			control: {
				type: "select" 
			},
			options: Object.values(EButtonSizes),
			description: "The button sizes",
		},
		fullWidth: {
			control: {
				type: "boolean" 
			},
			description: "The full width size",
		},
		disabled: {
			control: {
				type: "boolean" 
			},
			description: "Disabled state",
		},
		slot: {
			control: {
				type: "text" 
			},
			description: "The slot text or component",
		},
		hasPrefix: {
			control: {
				type: "boolean" 
			},
		},
		hasPostfix: {
			control: {
				type: "boolean" 
			},
		}
	},
	args: {
		slot: "default text",
		hasPrefix: false,
		hasPostfix: false,
	},
};

type TComponentProps = InstanceType<typeof UiButton>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: {
		UiButton,
		UiIcon 
	},
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return {
			args,
			ESize 
		};
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: /*html*/`
		<ui-button :kind="args.kind"
				   :size="args.size"
				   :fullWidth="args.fullWidth"
				   :disabled="args.disabled"
		>
			<template #prefix v-if="args.hasPrefix">
				<ui-icon
					:icon-name="['far', 'face-smile']"
				 	:size="ESize.SM"
				/>
			</template>
			${args.slot}
			<template #postfix v-if="args.hasPostfix">
				<ui-icon
					:icon-name="['far', 'face-smile']"
					:size="ESize.SM"
				/>
			</template>
		</ui-button>`,
});
const TemplateAll: Story<TComponentProps> = () => ({
	components: {
		UiButton 
	},

	setup() {
		return {
			EButtonSizes,
			EButtonTypes 
		};
	},

	template: /*html*/`
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
	kind: EButtonTypes.PRIMARY,
	size: EButtonSizes.MEDIUM,
	fullWidth: false,
	disabled: false,
};
export const Buttons = TemplateAll.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
