<template>
	<div
		class="notification-badge absolute min-w-sm h-sm font-bold text-xxs rounded-full border border-white text-white bg-error text-center leading-none"
		:class="[
			origin === EBadgeOrigin.DEFAULT && 'top-0 right-0',
			origin === EBadgeOrigin.OFFSET_TOP_RIGHT && '-top-xxs -right-xxs',
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
