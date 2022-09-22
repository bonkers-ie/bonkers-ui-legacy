import UiTableRow, { ERowKind } from "./ui-table-row";
import UiTableCell from "./ui-table-cell";
import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";

export default {
	title: "Components/ui-table",
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(ERowKind),
			description: "The row kind",
		},
	},
	args: {
		kind: ERowKind.SECONDARY,
	},
};

type MyComponentProps = InstanceType<typeof UiTableRow>["$props"];

const Template = (args: MyComponentProps) => ({
	components:{
		// UiTable,
		UiTableRow,
		UiTableCell,
		UiTypography
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
			ERowKind,
			args,
			list
		};
	},
	template:
	/*html*/`
		<table class='w-full'>
				<ui-table-row v-for="(row, index) in list"
											:key="index"
											rounded
											:kind="index % 2 === 0 && args.kind">
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
		</table>
	`
});

export const Default = Template.bind({});
