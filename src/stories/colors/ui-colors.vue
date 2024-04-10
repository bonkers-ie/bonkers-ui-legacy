<template>
	<h2 class="font-bold">
		Base colors:
	</h2>
	<ul class="colors grid gap-md">
		<li
			v-for="(value, key) in colors"
			:key="key"
			class="grid"
			:class="typeof value === 'object' && 'grid_inner'"
		>
			<div v-if="typeof value === 'object'">
				<h2 class="font-bold">
					{{ key }}:
				</h2>

				<ul
					class="colors grid gap-md"
				>
					<li
						v-for="(value2, key2) in value"
						:key="key2"
						class="grid"
					>
						<span
							class="relative block size-xxl rounded-full"
							:style="{
								backgroundColor: value2
							}"
						/>
						<b :style="{margin: '15px 0', display: 'block'}">
							{{ key2 }}
						</b>
						<p>
							({{ getCssVariableValue(value2) }})
						</p>
						<p>
							{{ value2 }};
						</p>
					</li>
				</ul>
			</div>
			<div v-else>
				<span
					class="relative block size-xxl rounded-full"
					:style="{
						backgroundColor: value
					}"
				/>
				<b :style="{margin: '15px 0', display: 'block'}">
					{{ key }}
				</b>
				<p>
					({{ getCssVariableValue(value) }})
				</p>
				<p>
					{{ value }};
				</p>
			</div>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import colors from "../../_styles/_colors.json";
	import { getCssVariableValue } from "../helper";
</script>

<style scoped>
	.colors {
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}

	.grid_inner {
		grid-column: 1/-1;
	}

	h2 {
		font-size: 30px;
		margin: 20px 0;
	}

	.rounded-full::before {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border: 2px dotted rgb(0 0 0 / 41%);
		border-radius: 50%;
		transform: scale(1.05);
		z-index: -1;
	}
</style>
