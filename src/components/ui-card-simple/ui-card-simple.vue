<template>
	<div
		class="
			ui-card-simple
			relative
			grid
			gap-sm
			rounded-3xl
			border
			border-secondary-alt-500
			bg-white
			p-sm
			"
	>
		<ui-typography
			v-if="slots.title"
			:weight="ETextWeight.BOLD"
			:align="ETextAlign.CENTER"
		>
			<slot name="title" />
		</ui-typography>

		<slot />

		<ui-typography
			v-if="slots.footer"
			:align="ETextAlign.CENTER"
		>
			<slot name="footer" />
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import { useSlots } from "vue";

	const slots = useSlots();
</script>
