import { ref } from "vue";
import UiRadioFancy from "./ui-radio-fancy.vue";
import type { Story } from "@storybook/vue3";
import { EIconType } from "../ui-icon/_typings";

export default {
	title: "Components/ui-radio-fancy",
	component: UiRadioFancy,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
		disabled: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
		disabled: false
	},
};

type TComponentProps = InstanceType<typeof UiRadioFancy>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiRadioFancy },
	setup() {
		const modelValue = ref("1");

		return { modelValue, EIconType, args };
	},
	template: /*html*/`
		<div class="grid gap-sm" :style="{'grid-template-columns': 'repeat(auto-fit, minmax(160px, 1fr))'}">
			<ui-radio-fancy v-for="item in 2" :key="item" :value="String(item)" v-model="modelValue" name="radio" title="title" :icon-name="[EIconType.FAR, 'face-smile']">
				{{args.slot}}
			</ui-radio-fancy>
		</div>
	`,
});

export const Default = Template.bind({});
