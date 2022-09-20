<template>
	<div class="slim-container">
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
.slim-container {
	display:grid;
	max-width:80px;
	grid-template-columns: 1fr;
	gap:10px;
	place-items: center;;
}
</style>
