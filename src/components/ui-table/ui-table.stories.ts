import type { Story } from "@storybook/vue3";
import UiTable from "../ui-table";
import UiTableRow from "../ui-table-row";
import UiTableCell from "../ui-table-cell";

export default {
	title: "Components/ui-table",
	component: UiTable,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		placeholder: {
			control: { type: "text" },
			description: "Placeholder",
		},
	},
	args: {
		placeholder: "Placeholder"
	}
};

type MyComponentProps = InstanceType<typeof UiTable>["$props"];

const Template: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiTable,
		UiTableRow,
		UiTableCell
	},
	setup(){
		return{
			args,
		};
	},
	template:
	/*html*/`
		<ui-table v-bind="args">
				<ui-table-row v-for="(row, index) in 4"
											:key="index"
											:greyed="!(index % 2 == 0) ? false : true">
					<ui-table-cell leftEdge bold>
						€1,411.86
						<div v-if="index === 2 || index === 3" class=" text-primary-alt-700 text-xxs" #subtext>
							<p>23.620 cent x</p>
							<p>4,200 kWh</p>
						</div>
					</ui-table-cell>
					<ui-table-cell>
						Elec cost
					</ui-table-cell>
					<ui-table-cell rightEdge bold>
						€1,411.86
						<div v-if="index === 2 || index === 3" class="text-primary-alt-700 text-xxs" #subtext>
							<p>23.620 cent x</p>
							<p>4,200 kWh</p>
						</div>
					</ui-table-cell>
				</ui-table-row>
		</ui-table>
	`
});

export const Default = Template.bind({});
