import UiSelect from "./ui-select.vue";
import type { Story } from "@storybook/vue3";
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
		}
	},
	args: {
		disabled: false,
	},
};

type TComponentProps = InstanceType<typeof UiSelect>["$props"];

const Template: Story<TComponentProps> = (args) => ({
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
		<ui-select v-bind="args" v-model="valueModel" heading="Heading" subLabel="Sub Label">
			<option
				v-for="item in list"
				:key="item"
				:value="item"
			>
				{{ item }}
			</option>
		</ui-select>
	`,
});

export const Default = Template.bind({});
