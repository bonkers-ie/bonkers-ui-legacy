<template>
	<div class="ui-order-card pt-md relative">
		<div class="ui-order-card__icon-wrapper left-1/2 -translate-x-1/2 -translate-y-1/2 flex absolute bg-primary-300 rounded-full border-4 border-white">
			<ui-icon
				:icon-name="iconName"
				:size="ESize.MD"
				class="-m-px"
				:class="[
					kind === EAlertTypes.PRIMARY && 'text-white',
					kind === EAlertTypes.WARNING && 'bg-warning-300 text-warning-700'
				]"
			/>
		</div>
	
		<slot name="warning" />

		<ui-typography
			:align="ETextAlign.CENTER"
			class="rounded-lg shadow-md pt-md bg-primary-300"
		>
			<ui-typography
				v-if="slots.title"
				class="pb-md"
				:kind="pickKind(kind)"
				:size="ETypographySizes.LG"
				:weight="ETextWeight.BOLD"
			>
				<slot name="title" />
			</ui-typography>
			
			<ui-typography
				v-if="slots.textBody"
				class="pb-md text-primary-700"
				:size="ETypographySizes.MD"
				:weight="ETextWeight.REGULAR"
			>
				<slot name="textBody" />  
			</ui-typography>

			<footer>
				<ui-typography
					v-if="slots.footer"
					class="py-sm bg-primary-700 text-secondary-alt-200 rounded-b-lg"
					:size="ETypographySizes.SM"
					:weight="ETextWeight.REGULAR"
				>
					<slot name="footer" /> 
				</ui-typography>
			</footer>
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { ESize } from "../../_types/sizing";
	import { EColors } from "../../_types/colors";
	import UiTypography, { ETextAlign, ETextWeight, ETypographySizes } from "../ui-typography";
	import { useSlots } from "vue";
	import type { TIconName } from "../ui-icon";
	import UiIcon from "../ui-icon";
	import { EAlertTypes } from "../ui-alert";

	withDefaults(defineProps<{
		hasWrapper?: boolean;
		iconName: TIconName;
		kind?:EAlertTypes;
	}>(), {
		kind: EAlertTypes.PRIMARY
	});

	const slots = useSlots();

	const pickKind = (kind: EAlertTypes)=>{
		switch(kind){
			case EAlertTypes.WARNING: return EColors.SECONDARY_ALT_700;
			default: return EColors.PRIMARY_700;
		}
	};

</script>
