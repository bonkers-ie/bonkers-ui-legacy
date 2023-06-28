<template>
	<div
		class="
			ui-result-card-range
			w-full
			flex
			flex-col
			items-center
			border-4
			border-secondary-alt-300
			bg-secondary-alt-200
			rounded-3xl
			text-secondary-500 p-md"
	>
		<ui-icon
			v-if="iconName"
			class="mb-md"
			:size="ESize.MD"
			:icon-name="iconName"
		/>
		<ui-typography
			v-if="title"
			class="mb-xs"
			:size="ETypographySizes.MD"
			:weight="ETextWeight.SEMI_BOLD"
			:align="ETextAlign.CENTER"
		>
			{{ title }}
		</ui-typography>

		<slot />
	</div>
</template>

<script lang="ts" setup>
	import uiIcon, { ESize, type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight, ETypographySizes, ETextAlign } from "../ui-typography";

	defineProps<{
		iconName?: TIconName;
		title?: string;
		size?: string;
		description?: string;
	}>();

</script>
