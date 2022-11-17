<template>
	<div class="ui-result-card-range border-1 border-secondary-alt-300 bg-secondary-alt-200 rounded text-secondary-500 h-full">
		hello

		<ui-icon
			class="fa-regular fa-flag rounded bg-secondary-alt-300 secondary-alt-200 mt-sm -translate-x-1/2 -translate-y-1/2"
			:size="ESize.MD"
			:icon-name="iconName"
		/>
		<ui-typography 
			v-if="$slots.title"
			class="secondary-alt-200 content-center"
			:size="ETypographySizes.MD"
			:weight="ETextWeight.BOLD"
		/>
		<slot class="title" />
		<ui-typography 
			v-if="$slots.textBody"
			class="secondary-alt-200 content-center m-auto"
			:size="ETypographySizes.SM"
			:weight="ETextWeight.REGULAR"
		/>
		<slot class="textBody" />
	</div>
</template>

<script lang="ts" setup>
	import uiIcon, { ESize, type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";

	defineProps<{
		iconName: TIconName;
		title: "title";
		size: "default";

	}>();

</script>
