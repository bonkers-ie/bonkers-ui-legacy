<template>
	<div class="ui-card-result">
		<div
			v-if="exclusiveText"
			class="bg-primary rounded-2xl px-sm pb-lg -mb-lg"
			@click="exclusiveClickAction"
		>
			<ui-typography
				class="py-xs"
				line-height
				:size="ETypographySizes.XXS"
				:kind="EColors.WHITE"
				:align="ETextAlign.CENTER"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ exclusiveText }}
			</ui-typography>
		</div>

		<div class="grid border border-secondary-alt-400 rounded-2xl overflow-hidden bg-white">
			<div class="ui-card-result__header grid gap-xs justify-between items-center rounded-lg bg-secondary-alt-200 p-xs m-xs mb-sm">
				<ui-typography
					v-if="header"
					line-height
					class="flex-1 line-clamp"
					:size="ETypographySizes.SM"
					:weight="ETextWeight.SEMI_BOLD"
				>
					{{ header }}
				</ui-typography>

				<slot name="sidebar" />
			</div>

			<main class="p-sm w-full overflow-hidden bg-white">
				<slot />
			</main>
		</div>

		<div
			v-if="exclusiveTextBottom"
			class="bg-secondary rounded-2xl px-sm pt-lg -mt-lg"
			@click="exclusiveBottomClickAction"
		>
			<ui-typography
				class="py-xs"
				:size="ETypographySizes.XXS"
				:kind="EColors.WHITE"
				:align="ETextAlign.CENTER"
				line-height
			>
				{{ exclusiveTextBottom }}
			</ui-typography>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight, ETextAlign } from "../ui-typography";
	import { EColors } from "../../_types/colors";

	defineProps<{
		header?: string;
		exclusiveText?: string;
		exclusiveTextBottom?: string;
		exclusiveClickAction?: () => void;
		exclusiveBottomClickAction?: () => void;
	}>();

</script>

<style scoped>
	.ui-card-result__header {
		grid-template-columns: 1fr auto;
	}

	.line-clamp {
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
