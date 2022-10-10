<template>
	<div
		class="icon-wrapper w-fit h-fit grid place-items-center relative mb-sm rounded-full"
		:class="[
			kind === EIconWrapperTypes.PRIMARY && 'text-white bg-primary-300',
			kind === EIconWrapperTypes.SECONDARY && 'text-black bg-secondary-alt-200',
			(!size || size === EIconWrapperSizes.DEFAULT) && 'py-sm px-sm',
			size === EIconWrapperSizes.SMALL && 'py-xs px-xs',
			size === EIconWrapperSizes.MEDIUM && 'py-md px-md',
			size === EIconWrapperSizes.LARGE && 'py-lg px-lg',
		]"
	>
		<slot name="badge" />
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { EIconWrapperSizes, EIconWrapperTypes } from "./_typings";

	type TProps = {
		kind?: EIconWrapperTypes;
		size?: EIconWrapperSizes;
	}
	defineProps<TProps>();
</script>

<style scoped>
</style>
