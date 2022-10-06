<template>
	<div
		class="icon-wrapper relative rounded-full"
		:class="[
			kind === EIconWrapperTypes.PRIMARY && 'text-white bg-primary-300',
			kind === EIconWrapperTypes.SECONDARY && 'text-white bg-secondary hover:bg-secondary-600',
			(!size || size === EIconWrapperSizes.DEFAULT) && 'py-sm px-md',
			size === EIconWrapperSizes.SMALL && 'py-xs px-md',
			size === EIconWrapperSizes.MEDIUM && 'py-sm px-sm',
			size === EIconWrapperSizes.LARGE && 'py-md px-md',
			fitContent && 'w-fit',
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
		fitContent?: boolean;
	}

	defineProps<TProps>();

</script>

<style scoped>
</style>
