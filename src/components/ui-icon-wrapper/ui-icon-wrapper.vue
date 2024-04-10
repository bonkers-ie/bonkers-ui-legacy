<template>
	<div
		class="icon-wrapper relative grid size-fit place-items-center rounded-2xl"
		:class="[
			kind === EIconWrapperTypes.PRIMARY && 'bg-primary text-white',
			kind === EIconWrapperTypes.SECONDARY && 'bg-secondary-alt-200 text-black',
			kind === EIconWrapperTypes.DEFAULT && 'border-2 border-primary bg-white text-primary ',

			size === EIconWrapperSizes.DEFAULT && 'p-sm',
			size === EIconWrapperSizes.SMALL && 'p-xs',
			size === EIconWrapperSizes.MEDIUM && 'icon-wrapper_offset-md p-md',
			size === EIconWrapperSizes.LARGE && 'icon-wrapper_offset-lg p-lg',
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
		kind: EIconWrapperTypes.DEFAULT,
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
