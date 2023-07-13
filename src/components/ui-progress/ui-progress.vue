<template>
	<div class="ui-progress">
		<div
			class="relative rounded-lg bg-primary-alt-300 h-xs w-full overflow-hidden"
		>
			<div
				class="ui-progress__bar-fill rounded-lg bg-primary-alt-700 z-10 absolute top-0 left-0 h-full transition-all duration-300"
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
