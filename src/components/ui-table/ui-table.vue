<template>
	<table
		:class="[
			'ui-table rounded-lg',
			kind === ETableKind.SECONDARY && 'ui-table__secondary',
			kind === ETableKind.SECONDARY_INVERTED && 'ui-table__secondary-inverted',
		]"
	>
		<slot />
	</table>
</template>

<script lang="ts" setup>
	import { ETableKind } from "./_types";

	withDefaults(defineProps<{
		kind?: ETableKind;
	}>(), {
		kind: ETableKind.SECONDARY_INVERTED,
	});
</script>

<style scoped>
	.ui-table__secondary::v-deep(tr:nth-child(odd)){
		background-color: var(--color-secondary-alt-200);
	}

	.ui-table__secondary-inverted::v-deep(tr:nth-child(even)){
		background-color: var(--color-secondary-alt-200);
	}
</style>
