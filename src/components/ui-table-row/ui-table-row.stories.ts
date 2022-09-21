import type { Story } from "@storybook/vue3";
import UiTableRow from "../ui-table-row";
import UiTableCell from "../ui-table-cell";
import { ERowKind } from "./_typings";

export default {
	title: "Components/ui-table-row",
	component: UiTableRow,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		active: {
			control: { type: "boolean" },
			description: "Active state",
		},
	},
	args: {
		active: false
	}
};

type MyComponentProps = InstanceType<typeof UiTableRow>["$props"];

const Template: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiTableRow,
		UiTableCell
	},
	setup(){
		return{
			args,
			ERowKind
		};
	},
	template:
	/*html*/`
				<ui-table-row :active="args.active">
					I'm a row in stories
				</ui-table-row>
	`
});

export const Default = Template.bind({});
