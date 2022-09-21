<template>
	<tr
		class="ui-table-row text-center"
		:class="[greyed && 'bg-secondary-alt-200']"
	>
		<slot />
	</tr>
</template>

<script lang="ts" setup>
	import { ERowKind } from "./_typings";

	defineProps<{
		greyed?: boolean;
		rounded?: boolean;
		kind?: ERowKind;
	}>();

</script>

<style scoped>
	.ui-table-row ::v-deep(td:first-child) {
		border-top-left-radius: var(--xs);
		border-bottom-left-radius: var(--xs);
		text-align:left;
	}

	.ui-table-row ::v-deep(td:last-child) {
		border-top-right-radius: var(--xs);
		border-bottom-right-radius: var(--xs);
		text-align:right;
	}
</style>
