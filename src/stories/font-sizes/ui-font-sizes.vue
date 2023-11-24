<template>
	<div class="ui-font-sizes flex flex-row flex-wrap gap-md">
		<p
			v-for="(value, key) in fontSizes"
			:key="key"
			class="p-md"
			:style="{fontSize: value}"
		>
			{{ getCssVariableValue(value) }}
			<br>
			<br>
			{{ key }}
			<br>
			{{ value }}
		</p>
	</div>
</template>

<script lang="ts" setup>
	import fontSizes from "../../_styles/_font-sizes.json";
	import { getCssVariableValue } from "../helper";
</script>

<style>
	.ui-font-sizes p {
		border: 1px solid #ccc;
	}
</style>
