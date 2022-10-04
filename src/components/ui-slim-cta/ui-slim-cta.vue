<template>
	<div
		class="slim-container flex-col max-w-max flex gap-sm"
		:class="invertOrder && 'flex-col-reverse'"
	>
		<slot name="slot1" />
		<slot name="slot2" />
		<slot name="slot3" />
		<slot name="slot4" />
	</div>
</template>

<script lang="ts" setup>
	import { useSlots } from "vue";
	import UiTypography from "../ui-typography";
	import uiRedBadge from "../ui-red-badge";
	import { ETypographySizes, ETextWeight } from "../ui-typography";
	import { EColors } from "../../_types/colors";

	const slots = useSlots();

	defineProps<{
		invertOrder?: boolean;
		disabled?: boolean;
	}>();

</script>

<style scoped>
</style>
