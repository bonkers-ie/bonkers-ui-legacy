<template>
	<td
		class="p-sm"
		:class="[leftEdge && 'left-edge', rightEdge && 'right-edge', bold && 'font-bold']"
	>
		<slot />
		<slot name="subtext" />
	</td>
</template>

<script lang="ts" setup>

	defineProps<{
		leftEdge?: boolean;
		rightEdge?: boolean;
		bold?: boolean;
	}>();

</script>

<style scoped>

.left-edge {
	border-bottom-left-radius: 20px;
	border-top-left-radius: 20px;
	text-align: left;
}

.right-edge {
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	text-align: right;
}

</style>
