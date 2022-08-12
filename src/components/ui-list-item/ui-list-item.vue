<template>
	<li class="ui-icon-list">
		<ui-icon
			v-if="icon"
			class="mr-xs"
			:size="ESize.SM"
			:icon-name="icon"
		/>

		<ui-typography
			is="span"
			:weight="ETextWeight.SEMI_BOLD"
			:size="ETypographySizes.SM"
		>
			<slot />
		</ui-typography>
	</li>
</template>

<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	defineProps<{
		icon?: TIconName;
	}>();

</script>
