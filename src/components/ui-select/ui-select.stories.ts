import UiSelect from "./ui-select.vue";
import type { Meta } from "@storybook/vue3";
import { ref } from "vue";

export default {
	title: "Components/ui-select",
	component: UiSelect,
	argTypes: {
		disabled: {
			control: {
				type: "boolean"
			},
			description: "The Element disabled state",
		},
		heading: {
			control: {
				type: "text"
			}
		},
		subLabel: {
			control: {
				type: "text"
			}
		}
	},
	args: {
		disabled: false,
		heading: "Heading",
		subLabel: "subLabel"
	},
} satisfies Meta<typeof UiSelect>;

export const Default = {
	render: (args) => ({
		components: {
			UiSelect
		},
		setup() {
			const list = ["Option 1", "Option 2", "Option 3"];
			const valueModel = ref(list[0]);
			return {
				args,
				valueModel,
				list
			};
		},
		template: /*html*/`
			<ui-select v-bind="args" v-model="valueModel" >
				<option
					v-for="item in list"
					:key="item"
					:value="item"
				>
					{{ item }}
				</option>
			</ui-select>
		`,
	})
};
