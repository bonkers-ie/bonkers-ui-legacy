import UiTableRow from "./ui-table-row";
import UiTableCell from "./ui-table-cell";
import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";
import UiTable from "./ui-table.vue";
import { ETableKind } from "./_types";

export default {
	title: "Components/ui-table",
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(ETableKind),
			description: "The row kind",
		},
	},
	args: {
		kind: ETableKind.DEFAULT,
	},
};

type MyComponentProps = InstanceType<typeof UiTableRow>["$props"];

const Template = (args: MyComponentProps) => ({
	components:{
		// UiTable,
		UiTableRow,
		UiTableCell,
		UiTypography,
		UiTable
	},
	setup(){

		const defaultList = {
			text1: "some text",
			text2: "some text2",
			text3: "some text3",
			extraText: false
		};
		const list = [
			defaultList,
			defaultList,
			defaultList,
			defaultList,
			defaultList,
			{
				...defaultList,
				extraText: true
			}
		];

		return{
			ETextWeight,
			ETypographySizes,
			args,
			list
		};
	},
	template:
	/*html*/`
		<ui-table class='w-full' :kind="args.kind">
				<ui-table-row v-for="(row, index) in list"
											:key="index"
											rounded>
					<ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
							{{row.text1}}
					</ui-table-cell>

					<ui-table-cell>
						{{row.text2}}
					</ui-table-cell>

					<ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
							{{row.text3}}
							<template #subtext v-if="row.extraText">
								<p>23.620 cent x</p>
								<p>4,200 kWh</p>
				 			</template>
					</ui-table-cell>
				</ui-table-row>
		</ui-table>
	`
});

export const Default = Template.bind({});
