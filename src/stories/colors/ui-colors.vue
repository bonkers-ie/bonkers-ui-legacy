<template>
	<h2 class="font-bold">
		Base colors:
	</h2>
	<ul class="colors grid gap-4">
		<li
			v-for="(value, key, index) in colors"
			:key="key"
			class="grid"
			:class="typeof value === 'object' && 'grid_inner'"
		>
			<div v-if="typeof value === 'object'">
				<h2 class="font-bold">
					{{ key }}:
				</h2>

				<ul
					class="colors grid gap-4"
				>
					<li
						v-for="(value2, key2, index2) in value"
						:key="key2"
						class="grid"
					>
						<span
							ref="colorRefs2"
							class="block h-24 w-24 rounded-full relative"
							:style="{
								backgroundColor: value2
							}"
						/>
						<p>
							{{ key2 }}
						</p>
						<p>
							{{ getBackgroundColor(index2, colorRefs2) }}
						</p>
						<p>
							{{ value2 }}
						</p>
					</li>
				</ul>
			</div>
			<div v-else>
				<span
					ref="colorRefs"
					class="block h-24 w-24 rounded-full relative"
					:style="{
						backgroundColor: value
					}"
				/>
				<p>
					{{ key }}
				</p>
				<p>
					{{ getBackgroundColor(index, colorRefs) }}
				</p>
				<p>
					{{ value }}
				</p>
			</div>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import colors from "../../_colors.json";

	const colorRefs = ref<Array<Element | null>>([]);
	const colorRefs2 = ref<Array<Element | null>>([]);

	const getBackgroundColor = (index: number, ref: Element[]) => {
		const element = ref[index];

		if (element) {
			return window.getComputedStyle(element, null).getPropertyValue("background-color");
		}
	}
</script>

<style scoped>
	.colors {
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}
	.grid_inner{
		grid-column: 1/-1
	}
	h2{
		font-size: 30px;
		margin: 20px 0;
	}
	.rounded-full::before{
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border: 2px dotted rgba(0, 0, 0, 0.41);
		border-radius: 50%;
		transform: scale(1.05);
		z-index: -1;
	}
</style>
