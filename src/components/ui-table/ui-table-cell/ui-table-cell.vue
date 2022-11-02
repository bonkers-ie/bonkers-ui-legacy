<template>
	<ui-typography
		is="td"
		:size="ETypographySizes.SM"
		:align="align"
		:weight="weight"
		class="p-sm"
	>
		<slot />

		<ui-typography
			v-if="$slots.subtext"
			:size="ETypographySizes.XXS"
			:weight="ETextWeight.SEMI_BOLD"
			class="flex flex-col gap-xxs"
			:kind="EColors.PRIMARY_ALT_700"
			:class="$slots.default && 'pt-sm'"
		>
			<slot name="subtext" />
		</ui-typography>
	</ui-typography>
</template>

<script lang="ts" setup>
	import { EColors } from "../../../_types/colors";
	import UiTypography, { ETypographySizes, ETextAlign, ETextWeight } from "../../ui-typography";

	defineProps<{
		align?: ETextAlign;
		weight?: ETextWeight;
	}>();

</script>
