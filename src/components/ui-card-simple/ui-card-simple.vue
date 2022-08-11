<template>
	<div
		class="ui-card-simple rounded-3xl shadow-md py-md px-sm bg-white"
		:class="className"
	>
		<ui-typography
			v-if="slots.title"
			:weight="ETextWeight.BOLD"
			:align="ETextAlign.CENTER"
			class="pb-md"
		>
			<slot name="title" />
		</ui-typography>

		<slot />

		<ui-typography
			v-if="slots.footerSubtitle"
			:align="ETextAlign.CENTER"
		>
			<slot name="footerSubtitle" />
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import { useSlots } from "vue";

	const slots = useSlots();

	defineProps<{
		className? : string;
	}>();
</script>
