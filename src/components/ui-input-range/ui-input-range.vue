<template>
	<div
		class="ui-input-range relative h-lg"
	>
		<input
			class="appearance-none absolute cursor-pointer bg-transparent w-full h-full"
			type="range"
			:min="min"
			:max="max"
			:value="modelValue"
			:step="step"
			@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		>
		<div class="ui-input-range__line h-xs w-full bg-secondary-alt rounded absolute left-0 -z-10" />
		<div
			class="ui-input-range__line h-xs bg-primary rounded absolute left-0 -z-10"
			:style="{
				width: getPercentage + '%',
			}"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";

	const props = defineProps<{
		modelValue: string | number;
		min: string | number;
		max: string | number;
		step: string | number;
	}>();

	defineEmits<{
		(e: "update:modelValue", state: string | number): void
	}>();

	const getPercentage = computed(() => {
		return Math.round(((+props.modelValue - +props.min) / (+props.max - +props.min)) * 100);
	});
</script>

<style scoped>
	input[type="range"]::-webkit-slider-thumb {
		appearance: none;
		background-color: var(--color-primary);
		height: 13px;
		width: 13px;
		border-radius: 50%;
		border: var(--xs) solid var(--color-white);
		box-shadow: 0 0 0 4px var(--color-primary);
		box-sizing: content-box;
		z-index: 1;
	}

	input[type="range"]::-moz-range-thumb {
		appearance: none;
		background-color: var(--color-primary);
		height: 13px;
		width: 13px;
		border-radius: 50%;
		border: var(--xs) solid var(--color-white);
		box-shadow: 0 0 0 4px var(--color-primary);
		box-sizing: content-box;
		z-index: 1;
	}

	.ui-input-range__line {
		top: 50%;
		transform: translate3d(0, -50%, 0);
	}
</style>
