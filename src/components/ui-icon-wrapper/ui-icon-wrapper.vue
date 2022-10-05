<template>
	<div
		class="slim-container  bg-primary-400 "
		:class="[
			kind === EIconWrapperTypes.SECONDARY && 'text-white bg-secondary hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300',
			kind === EIconWrapperTypes.WARNING && 'text-white bg-warning hover:bg-warning-600 active:bg-warning-700 disabled:bg-warning-300',
			(!size || size === EIconWrapperSizes.DEFAULT) && 'py-sm px-md',
			size === EIconWrapperSizes.SMALL && 'py-xs px-md',
			size === EIconWrapperSizes.MEDIUM && 'py-sm px-sm',
			size === EIconWrapperSizes.LARGE && 'py-md px-md',
			fullWidth && 'w-full',
			disabled && 'pointer-events-none',
		]"
	>
		<slot />
	</div>
</template>

<script lang="ts" setup>

	import { EColors } from "../../_types/colors";

	import { EIconWrapperSizes, EIconWrapperTypes } from "./_typings";

	type TProps = {
		kind?: EIconWrapperTypes;
		size?: EIconWrapperSizes;
		fullWidth?: boolean;
		disabled?: boolean;
	}

	defineProps<TProps>();

</script>

<style scoped>
</style>
