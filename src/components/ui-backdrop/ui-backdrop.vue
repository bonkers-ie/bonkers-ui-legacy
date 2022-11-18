<template>
	<transition-group
		name="fade"
		enter-active-class="transition-opacity duration-300"
		leave-active-class="transition-opacity duration-300 opacity-0"
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
	>
		<div
			v-if="visible"
			class="
				backdrop-color
				fixed
				backdrop-blur-sm
				transition-all
				inset-0
				z-0
				"
		/>

		<slot />
	</transition-group>
</template>

<script lang="ts" setup>

	withDefaults(
		defineProps<{
			visible?: boolean;
		}>(),
		{
			visible: true,
		}
	);

</script>

<style lang="css" scoped>
	.backdrop-color {
		background-color: rgb(0 0 0 / 50%);
	}
</style>
