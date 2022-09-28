<template>
	<div
		class="red-badge absolute font-bold text-xxs rounded-full border text-white border-white bg-error aspect-square flex items-center justify-center"
		:class="[
			origin === EBadgeOrigin.DEFAULT && 'top-0 right-0',
			origin === EBadgeOrigin.OFFSET_TOP_RIGHT && '-top-xxs -right-xxs'
		]"
	>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { EBadgeOrigin } from "./_types";

	withDefaults(defineProps<{
		origin?: EBadgeOrigin
	}>(),{
		origin: EBadgeOrigin.DEFAULT
	});

</script>
<style>
 .red-badge {
	border:1px solid red;
	min-width:20px;
	min-height:20px
 }

</style>
