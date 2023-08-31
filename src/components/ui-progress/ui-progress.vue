<template>
	<div class="ui-progress">
		<div
			class="relative h-xs w-full overflow-hidden rounded-lg bg-primary-200"
		>
			<div
				class="
					ui-progress__bar-fill
					absolute
					left-0
					top-0
					z-10
					h-full
					rounded-lg
					bg-primary-alt-700
					transition-all
					duration-300
				"
				:style="{
					width: filler + '%'
				}"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";

	const props = withDefaults(defineProps<{
		min: number
		max: number
		current: number
	}>(),{
		min: 0,
		max: 100,
		current: 0
	});

	const filler = computed(() => {
		return ((props.current - props.min) / (props.max - props.min)) * 100;
	});
</script>
