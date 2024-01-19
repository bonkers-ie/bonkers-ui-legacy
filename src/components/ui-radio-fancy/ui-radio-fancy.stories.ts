import { ERadioSizes } from "./_typings";
import { UiRadioFancy } from "../ui-radio-fancy";
import { ICON_DEFAULT } from "./../../CONSTANTS";
import { UiTypography, ETypographySizes } from "../ui-typography";
import type { Meta } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-radio-fancy",
	component: UiRadioFancy,
	argTypes: {
		disabled: {
			control: {
				type: "boolean"
			},
			description: "The full width size",
		},
		radioSize: {
			control: {
				type: "select"
			},
			options: Object.values(ERadioSizes),
			description: "The radio kinds",
		},
	},
	args: {
		disabled: false
	}
} satisfies Meta<typeof UiRadioFancy>;

export const Default = {
	args: {
		iconName: ICON_DEFAULT,
		default: "Description",
		invertOrder: false,
		disabled: false,
		radioSize: ERadioSizes.DEFAULT
	},
};

export const Compact = {
	args: {
		default: "1",
		radioSize: ERadioSizes.COMPACT
	},

	render: (args) => ({
		components: {
			UiRadioFancy,
			UiTypography
		},
		setup() {
			const modelValue = ref("1");
			return {
				args,
				ETypographySizes,
				modelValue
			};
		},
		template: /*html*/`
		<div class="flex gap-sm">
			<ui-radio-fancy v-for="item in 2"
				:key="item"
				:value="String(item)"
				v-model="modelValue"
				name="radio" title="title"
				:radioSize="args.radioSize"
				:disabled="args.disabled"
			>
				<ui-typography :size="ETypographySizes.MD">
					{{item}}
				</ui-typography>
			</ui-radio-fancy>
		</div>
		`,
		args: {
			default: "1",
			radioSize: ERadioSizes.COMPACT
		},
	}),
};
