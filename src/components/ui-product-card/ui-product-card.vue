<template>
	<ui-card-simple class="relative py-md">
		<div>
			<slot name="cardIcon" />
			<ui-typography
				v-if="slots.title"
				:size="ETypographySizes.MD"
				:weight="ETextWeight.SEMI_BOLD"
				:align="ETextAlign.LEFT"
				class="mb-xxxs"
				:line-height="true"
			>
				<slot name="title" />
			</ui-typography>

			<ui-typography
				v-if="slots.productsSubtitle"
				:size="ETypographySizes.XS"
				:align="ETextAlign.LEFT"
				:kind="EColors.SECONDARY_300"
			>
				<slot name="productsSubtitle" />
			</ui-typography>
		</div>
	</ui-card-simple>
</template>

<script lang="ts" setup>
	import UiCardSimple from "../ui-card-simple";
	import UiTypography, { ETextWeight, ETextAlign, ETypographySizes, EColors } from "../ui-typography";
	import { useSlots } from "vue";

	const slots = useSlots();

</script>
