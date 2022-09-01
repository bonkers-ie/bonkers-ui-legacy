<template>
	<div
		class="ui-input-range relative h-xl mx-xs"
	>
		<input
			ref="track"
			v-model="rangeModel"
			class="appearance-none absolute cursor-pointer bg-transparent w-full h-full"
			type="range"
			:min="min"
			:max="max"
			:step="step"
			@touchmove="moveHandler"
		>
		<div
			class="ui-input-range__line h-xs w-full bg-secondary-alt rounded absolute left-0 -z-10 -translate-y-1/2"
		/>
		<div
			class="ui-input-range__line h-xs bg-primary rounded absolute left-0 -z-10 -translate-y-1/2"
			:style="{
				width: getPercentage + '%',
			}"
		/>

		<div
			class="ui-input-range__thumb bg-primary absolute border-8 border-white rounded-full box-content -translate-y-1/2 -translate-x-1/2 pointer-events-none"
			:style="{left: getPercentage + '%'}"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { computed, ref } from "vue";

	const props = defineProps<{
		modelValue: string | number;
		min: string | number;
		max: string | number;
		step: string | number;
	}>();

	const emit = defineEmits<{
		(e: "update:modelValue", state: string | number): void
	}>();

	const rangeModel = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	});

	const track = ref();

	const getPercentage = computed(() => {
		return Math.round(((+props.modelValue - +props.min) / (+props.max - +props.min)) * 100);
	});

	const parseMouseMove = (e: MouseEvent | TouchEvent) => {
		if(track.value){
			const CLICK = "clientX";

			const {
				left: trackStart,
				width: trackLength,
			} = track.value.getBoundingClientRect();

			const clickOffset = "touches" in e ? e.touches[0][CLICK] : e[CLICK];

			// It is possible for left to be NaN, force to number
			const clickPos = Math.min(Math.max((clickOffset - trackStart ) / trackLength, 0), 1) || 0;

			const mousePositionInPercent = parseFloat(String(props.min)) + clickPos * (+props.max - +props.min);

			const newValue = Math.round((mousePositionInPercent) / +props.step) * +props.step;

			return parseFloat(Math.min(newValue, +props.max).toFixed(2));
		}
	};

	const moveHandler = (e: MouseEvent | TouchEvent) => {
		rangeModel.value = parseMouseMove(e) || 0;
	};

</script>

<style scoped>
	input[type="range"]::-webkit-slider-thumb {
		appearance: none;
		height: 8px;
		width: 8px;
		transform: scale(5);
		background-color: transparent;
		border: 0;
		box-shadow: none;
	}

	input[type="range"]::-moz-range-thumb {
		appearance: none;
		background-color: transparent;
		border: 0;
		box-shadow: none;
	}

	.ui-input-range__line {
		top: 50%;
	}

	.ui-input-range__thumb {
		top: 50%;
		height: 13px;
		width: 13px;
		box-shadow: 0 0 0 4px var(--color-primary);
	}
</style>
