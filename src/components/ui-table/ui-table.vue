EInputKinds<template>
	<table class="ui-table w-full max-w-xl">
		<slot />
	</table>
</template>

<script lang="ts" setup>
	import { EInputKinds, EInputType } from "./_typings";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import { stringLiteral } from "@babel/types";
	import UiTableRow from "../ui-table-row/ui-table-row.vue";

	defineProps<{
		placeholder?: string;
		disabled?: boolean;
		kind?: EInputKinds;
		type?: EInputType;
	}>();
</script>

<style scoped>

</style>
