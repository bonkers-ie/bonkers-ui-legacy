<template>
	<div
		class="ui-input-range relative box-content h-lg py-xs"
	>
		<input
			ref="track"
			v-model.number="rangeModel"
			class="absolute left-0 top-0 h-full w-full cursor-pointer appearance-none bg-transparent"
			type="range"
			:min="min"
			:max="max"
			:step="step"
			@touchmove="moveHandler"
		>

		<div
			class="pointer-events-none absolute left-0 top-1/2 h-xs w-full -translate-y-1/2 rounded bg-secondary-alt"
		/>

		<div
			class="pointer-events-none absolute left-0 top-1/2 h-xs -translate-y-1/2 rounded bg-primary"
			:style="{
				width: getPercentage + '%',
			}"
		/>

		<div
			class="
				ui-input-range__thumb
				pointer-events-none
				absolute
				box-content
				h-xs
				w-xs
				-translate-x-1/2
				-translate-y-1/2
				rounded-full
				border-white
				bg-primary
			"
			:style="{left: getPercentage + '%'}"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { computed, ref, watch } from "vue";

	const props = defineProps<{
		modelValue: number;
		min: string | number;
		max: string | number;
		step: string | number;
	}>();

	const emit = defineEmits<{
		(e: "update:modelValue", state: number): void
	}>();

	const rangeModel = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	});

	watch(()=>[props.min, props.max], () => {
		if(rangeModel.value < +props.min){
			rangeModel.value = +props.min;
		}else if(rangeModel.value > +props.max){
			rangeModel.value = +props.max;
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
		const newValue = parseMouseMove(e);

		if(newValue){
			rangeModel.value = newValue;
		}
	};

</script>

<style scoped>
	input[type="range"]::-webkit-slider-thumb {
		appearance: none;
		height: 10px;
		width: 10px;
		transform: scale(4);
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

	.ui-input-range__thumb {
		top: 50%;
		border-width: 12px;
		box-shadow: 0 0 0 4px var(--color-primary);
	}
</style>
