<template>
	<div
		class="
			notification-badge
			absolute
			h-sm
			min-w-sm
			rounded-full
			border
			border-white
			bg-error
			text-center
			text-xxs
			font-bold
			leading-none
			text-white
		"
		:class="[
			origin === EBadgeOrigin.DEFAULT && 'right-0 top-0',
			origin === EBadgeOrigin.OFFSET_TOP_RIGHT && '-right-xxxs -top-xxxs',
		]"
	>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { EBadgeOrigin } from "./_types";

	withDefaults(defineProps<{
		origin?: EBadgeOrigin,
	}>(),{
		origin: EBadgeOrigin.DEFAULT,
	});

</script>

<style>
	.notification-badge {
		padding: 2px;
	}
</style>
