import { UiRadioCompact } from "../ui-radio-compact";
import { UiTypography, ETypographySizes, ETextAlign } from "../ui-typography";
import { ref } from "vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-radio-compact",
	component: UiRadioCompact,
} satisfies Meta<typeof UiRadioCompact>;

export const Default = {
	render: (args) => ({
		components: {
			UiRadioCompact,
			UiTypography
		},
		setup() {
			const modelValue = ref("1");
			return {
				args,
				ETypographySizes,
				ETextAlign,
				modelValue
			};
		},
		template: /*html*/`
			<div class="flex flex-row gap-sm align-middle" :style="{}">
				<ui-radio-compact v-for="item in 8"
					:key="item"
					:value="String(item)"
					v-model="modelValue"
					name="radio" title="title"

				>
						{{item}}
					</ui-radio-compact>

			</div>
			<br/>
			modelValue: {{modelValue}}
		`,
		args: {
			default: "1"
		},
	}),

};
