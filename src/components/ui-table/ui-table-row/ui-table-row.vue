<template>
	<tr
		class="ui-table-row text-center"
		:class="[kind === ERowKind.SECONDARY && 'bg-secondary-alt-200']"
	>
		<slot />
	</tr>
</template>

<script lang="ts" setup>
	import { ERowKind } from "./_typings";

	defineProps<{
		kind?: ERowKind;
	}>();

</script>

<style scoped>
	.ui-table-row ::v-deep(td:first-child) {
		border-top-left-radius: var(--xxs);
		border-bottom-left-radius: var(--xxs);
		text-align: left;
	}

	.ui-table-row ::v-deep(td:last-child) {
		border-top-right-radius: var(--xxs);
		border-bottom-right-radius: var(--xxs);
		text-align: right;
	}
</style>
