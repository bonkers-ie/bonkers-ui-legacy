<template>
	<div class="red-badge absolute top-0 right-0 font-bold text-xxs rounded-full border text-white border-white bg-error w-sm h-sm grid place-items-center">
		{{ number }}
	</div>
</template>

<script lang="ts" setup>

	defineProps<{
		number: number;
	}>();
</script>

<style scoped>

</style>
