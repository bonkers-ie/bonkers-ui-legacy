<template>
	<div
		ref="spacingsRef"
		class="flex flex-row flex-wrap gap-md"
	>
		<div
			v-for="spacing in spacingKeys"
			:key="spacing"
			class="border border-black p-md"
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
					class="border border-black bg-primary-alt-400"
					:style="{
						width: spacings[spacing],
						height: spacings[spacing],
					}"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import spacings from "../../_styles/_spacing.json";
	import { getCssVariableValue } from "../helper";

	const spacingKeys = Object.keys(spacings) as Array<keyof typeof spacings>;
</script>
