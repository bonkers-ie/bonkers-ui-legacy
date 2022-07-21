<template>
	<div
		ref="spacingsRef"
		class="flex flex-row flex-wrap gap-md"
	>
		<div
			v-for="spacing in spacingKeys"
			:key="spacing"
			class="block"
		>
			<div class="grid gap-sm">
				<div>
					<b>
						{{
							getCssVariableValue(spacings[spacing])
						}}
					</b>
					<br>
					<br>
					{{ spacing }}
					<br>
					{{ spacings[spacing] }}
				</div>

				<div
					:style="{
						width: spacings[spacing],
						height: spacings[spacing],
						border: '1px solid #ccc'
					}"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import spacings from "../../_spacing.json";
	import { getCssVariableValue } from "../helper";

	const spacingKeys = Object.keys(spacings);

</script>

<style scoped>
	.block {
		border: 2px solid #ccc;
		padding: 20px;
	}
</style>
