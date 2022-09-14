<template>
	<div class="ui-order-card">	
		<font-awesome-icon
			class="ui-icon"
			:icon="iconName"
			:class="[
				size === ESize.XXS && 'h-xxs w-xxs',
				size === ESize.XS && 'h-xs w-xs',
				size === ESize.SM && 'h-sm w-sm',
				size === ESize.MD && 'h-md w-md',
				size === ESize.LG && 'h-lg w-lg',
				size === ESize.XL && 'h-xl w-xl',
				size === ESize.XXL && 'h-xxl w-xxl',
				hasWrapper && 'p-sm bg-primary rounded-2xl',
				
				
			]"/>
			
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
	

	defineProps<{
		hasWrapper?: boolean;
		size: ESize;
	}>();

	const slots = useSlots();

</script>
