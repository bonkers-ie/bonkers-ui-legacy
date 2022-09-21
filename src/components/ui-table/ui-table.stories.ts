import UiTableRow from "../ui-table-row";
import UiTableCell from "../ui-table-cell";
import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";

export default {
	title: "Components/ui-table",
	// component: UiTable,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

const Template = () => ({
	components:{
		// UiTable,
		UiTableRow,
		UiTableCell,
		UiTypography
	},
	setup(){
		return{
			ETextWeight,
			ETypographySizes
		};
	},
	template:
	/*html*/`
		<table v-bind="args" class='w-full'>
				<ui-table-row v-for="(row, index) in 2"
											:key="index"
											:greyed="index % 2 === 0"
											:rounded
				>
					<ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
							€1,411.86
					</ui-table-cell>

					<ui-table-cell>
						Elec cost
					</ui-table-cell>

					<ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
							€1,411.86
					</ui-table-cell>
				</ui-table-row>

				<ui-table-row v-for="(row, index) in 2"
				:key="index"
				:greyed="index % 2 === 0"
				:rounded>
					<ui-table-cell :size='ETypographySizes.SM' :weight='ETextWeight.SEMI_BOLD'>
							€1,411.86
						<template #subtext>
								<p>23.620 cent x</p>
								<p>4,200 kWh</p>
						</template>
					</ui-table-cell>

					<ui-table-cell>
						Elec cost
					</ui-table-cell>

					<ui-table-cell :size='ETypographySizes.SM' :weight='ETextWeight.SEMI_BOLD'>
						€1,411.86
						<template #subtext>
							<p>23.620 cent x</p>
							<p>4,200 kWh</p>
						</template>
					</ui-table-cell>
				</ui-table-row>

		</ui-table>
	`
});

export const Default = Template.bind({});
