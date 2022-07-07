<template>
	<svg
		:width="size"
		:height="size"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
	>
		<path
			d="M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"
		/>
	</svg>
</template>

<script lang="ts" setup>
	defineProps<{
		size: number
	}>();
</script>
