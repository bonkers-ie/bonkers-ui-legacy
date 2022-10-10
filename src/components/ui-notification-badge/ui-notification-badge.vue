<template>
	<div
		class="notification-badge absolute min-w-sm min-h-sm font-bold text-center text-xxs rounded-full border text-white border-white bg-error flex items-center justify-center"
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

</style>
