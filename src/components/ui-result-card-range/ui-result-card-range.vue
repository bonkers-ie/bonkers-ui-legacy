<template>
	<div class="ui-result-card-range flex flex-col items-center justify-evenly h-fit border-1 border-secondary-alt-300 bg-secondary-alt-200 rounded text-secondary-500 p-md">
		<ui-icon
			class="fa-regular fa-flag rounded-full bg-secondary-alt-300 secondary-alt-200 mb-md"
			:size="ESize.MD"
			:icon-name="iconName"
		/>
		<ui-typography 
			v-if="title"
			class="secondary-alt-200 place content-center mb-xs"
			:size="ETypographySizes.MD"
			:weight="ETextWeight.BOLD"
		>
			{{ title }}
		</ui-typography>
		<ui-typography 
			v-if="body"
			class="secondary-alt-200 place-content-even"
			:size="ETypographySizes.SM"
			:weight="ETextWeight.REGULAR"
		>
			{{ body }}
		</ui-typography>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import uiIcon, { ESize, type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";

	defineProps<{
		iconName: TIconName;
		title: "title";
		body: "body";
		size: "default";
		description: "default";
	}>();

</script>
