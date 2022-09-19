<template>
	<tr
		class="text-sm text-center"
		:class="[greyed && 'bg-secondary-alt-200']"
	>
		<slot />
	</tr>
</template>

<script lang="ts" setup>

	defineProps<{
		greyed?: boolean
	}>();

</script>
