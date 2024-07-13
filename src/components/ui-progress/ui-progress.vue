<template>
	<div class="ui-progress">
		<div
			class="relative h-xxs w-full overflow-hidden rounded-xl bg-primary-200"
		>
			<div
				class="
					ui-progress__bar-fill
					absolute
					left-0
					top-0
					z-10
					h-full
					rounded-xl
					bg-primary-alt-700
					transition-all
					duration-300
					"
				:style="{
					width: filler + '%'
				}"
			/>
		</div>

		<ui-typography
			v-if="progressText"
			:kind="EColors.PRIMARY_ALT_700"
			:align="ETextAlign.RIGHT"
			:weight="ETextWeight.SEMI_BOLD"
			class="mt-xxs"
		>
			{{ progressText }}
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import { UiTypography, EColors, ETextAlign, ETextWeight } from "../ui-typography";

	const props = withDefaults(defineProps<{
		min: number
		max: number
		current: number
		progressText?: string
	}>(),{
		min: 0,
		max: 100,
		current: 0,
		progressText: ""
	});

	const filler = computed(() => {
		return ((props.current - props.min) / (props.max - props.min)) * 100;
	});
</script>
