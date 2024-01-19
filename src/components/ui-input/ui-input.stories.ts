import type { Meta } from "@storybook/vue3";
import { UiInput } from "../ui-input";
import Icon from "../../_samples/icon.vue";
import { ref } from "vue";
import { EInputKinds, EInputType, EAutocomplete } from "./_typings";

export default {
	title: "Components/ui-input",
	component: UiInput,
	argTypes: {
		placeholder: {
			control: {
				type: "text"
			},
			description: "Placeholder",
		},
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EInputKinds),
			description: "The input kinds",
		},
		type: {
			control: {
				type: "select"
			},
			options: Object.values(EInputType),
			description: "The input type",
		},
		disabled: {
			control: {
				type: "boolean"
			},
			description: "The Element disabled state",
		},
		autocomplete: {
			control: {
				type: "select"
			},
			option: Object.values(EAutocomplete),
			description: "The Element autocomplete state",
		},
		heading: {
			control: {
				type: "text"
			},
		},
		maxlength: {
			control: {
				type: "text"
			},
		},
		minlength: {
			control: {
				type: "text"
			},
		}
	},
	args: {
		placeholder: "Placeholder",
		kind: undefined,
		disabled: false,
		type: EInputType.TEXT,
		autocomplete: EAutocomplete.OFF,
		heading: "heading",
		maxlength: "5",
		minlength: "1",
	}
} satisfies Meta<typeof UiInput>;

export const Default = {
	render: (args) => ({
		components: {
			UiInput
		},
		setup() {
			const valueModel = ref("");
			return {
				args,
				valueModel
			};
		},
		template: /*html*/`
			<ui-input v-bind="args" v-model="valueModel" />
		`
	})
};
export const AllInputs = {
	render: (args) => ({
		components: {
			UiInput,
			Icon
		},
		setup() {
			const valueModel = ref("");

			return {
				args,
				valueModel
			};
		},
		template: /*html*/`
			<div :style="{
				display: 'grid',
				gridGap: '12px'
			}">
				<ui-input v-bind="args" v-model="valueModel">
					<template v-slot:prefix-icon>
						<span class="text-secondary-alt"> € </span>
					</template>
				</ui-input>
				<ui-input v-bind="args" v-model="valueModel">
					<template v-slot:prefix-icon>
						<Icon :size="16" class="text-secondary-alt" />
					</template>
				</ui-input>
				<ui-input v-bind="args" v-model="valueModel">
					<template v-slot:postfix-icon>
						<Icon :size="16"  class="text-secondary-alt" />
					</template>
				</ui-input>
			</div>
		`
	})
};
