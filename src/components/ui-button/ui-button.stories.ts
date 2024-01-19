import { UiButton } from "../ui-button";
import { UiIcon } from "../ui-icon";
import { ESize } from "../../_types/sizing";
import { EButtonSizes, EButtonTypes } from "./_typings";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-button",
	component: UiButton,
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
		default: {
			control: {
				type: "text"
			},
			description: "The slot text or component",
		},
		prefix: {
			control: {
				type: "boolean"
			},
		},
		postfix: {
			control: {
				type: "boolean"
			},
		}
	},
	args: {
		kind: EButtonTypes.PRIMARY,
		size: EButtonSizes.MEDIUM,
		fullWidth: false,
		disabled: false,
		default: "default text",
		prefix: false,
		postfix: false
	},
} satisfies Meta<typeof UiButton>;

export const Primary = {
	render: (args) => ({
		components: {
			UiButton,
			UiIcon
		},
		setup() {
			return {
				args,
				ESize
			};
		},
		template: /*html*/`
			<ui-button v-bind="args">
				<template #prefix v-if="args.prefix">
					<ui-icon
						:icon-name="['far', 'face-smile']"
						 :size="ESize.SM"
					/>
				</template>
				${args.default}
				<template #postfix v-if="args.postfix">
					<ui-icon
						:icon-name="['far', 'face-smile']"
						:size="ESize.SM"
					/>
				</template>
			</ui-button>`,
	})
};

export const Buttons = {
	render: () => ({
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
	})
};
