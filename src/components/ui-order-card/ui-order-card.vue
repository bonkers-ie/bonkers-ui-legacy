<template>
	<div class="ui-order-card">	
		<ui-icon
			:icon-name="iconName"
			:size="ESize.LG"
			:items="CENTER"
			class="bg-primary-300 rounded-full border-white"
		/>
			
		<ui-typography
			:align="ETextAlign.CENTER"
			class="rounded-lg shadow-md pt-md bg-primary-300"
		>
			<ui-typography
				v-if="slots.title"
				class="pb-md text-primary-700"
				:size="ETypographySizes.LG"
				:weight="ETextWeight.BOLD"
			>
				<slot name="title" />
			</ui-typography>
			
			<ui-typography
				v-if="slots.textBody"
				class="pb-md"
				:size="ETypographySizes.MD"
				:weight="ETextWeight.REGULAR"
			>
				<slot name="textBody" />  
			</ui-typography>

			<footer>
				<ui-typography
					v-if="slots.footerSubtitle"
					class="py-sm bg-primary-700 text-secondary-alt-200 rounded-b-lg"
					:size="ETypographySizes.SM"
					:weight="ETextWeight.REGULAR"
				>
					<slot name="footerSubtitle" /> 
				</ui-typography>
			</footer>
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETextAlign, ETextWeight, ETypographySizes } from "../ui-typography";
	import { useSlots } from "vue";
	import type { TIconName } from "../ui-icon";
	import UiIcon from "../ui-icon";

	defineProps<{
		hasWrapper?: boolean;
		iconName: TIconName;
	}>();

	const slots = useSlots();

</script>
