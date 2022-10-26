<template>
	<div
		class="icon-wrapper w-fit h-fit grid place-items-center relative mb-sm rounded-full"
		:class="[
			kind === EIconWrapperTypes.PRIMARY && 'text-white bg-primary-300',
			kind === EIconWrapperTypes.SECONDARY && 'text-black bg-secondary-alt-200',
			size === EIconWrapperSizes.DEFAULT && 'py-sm px-sm',
			size === EIconWrapperSizes.SMALL && 'py-xs px-xs',
			size === EIconWrapperSizes.MEDIUM && 'py-md px-md icon-wrapper_offset-md',
			size === EIconWrapperSizes.LARGE && 'py-lg px-lg icon-wrapper_offset-lg',
		]"
	>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { EIconWrapperSizes, EIconWrapperTypes } from "./_typings";

	type TProps = {
		kind?: EIconWrapperTypes;
		size?: EIconWrapperSizes;
	}

	withDefaults(defineProps<TProps>(),{
		kind: EIconWrapperTypes.PRIMARY,
		size: EIconWrapperSizes.DEFAULT,
	});

</script>

<style scoped>

.icon-wrapper_offset-md :deep(.notification-badge) {
	top: 4px;
	right: 4px;
}

.icon-wrapper_offset-lg :deep(.notification-badge) {
	top: 8px;
	right: 8px;
}

</style>
