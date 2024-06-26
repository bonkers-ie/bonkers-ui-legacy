<template>
	<div class="ui-card-result">
		<div
			v-if="exclusiveText"
			class="-mb-xl rounded-2xl bg-primary px-sm pb-xl"
			@click="exclusiveClickAction"
		>
			<ui-typography
				class="py-xxs"
				line-height
				:size="ETypographySizes.XXS"
				:kind="EColors.WHITE"
				:align="ETextAlign.CENTER"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ exclusiveText }}
			</ui-typography>
		</div>

		<div class="relative grid overflow-hidden rounded-2xl border border-secondary-alt-400 bg-white">
			<div
				class="
				ui-card-result__header
				m-xxs
				mb-sm
				grid
				items-center
				justify-between
				gap-xxs
				rounded-xl
				bg-secondary-alt-200
				p-xxs
			"
			>
				<ui-typography
					v-if="header"
					line-height
					class="line-clamp flex-1"
					:size="ETypographySizes.SM"
					:weight="ETextWeight.BOLD "
					:kind="EColors.SECONDARY"
				>
					{{ header }}
				</ui-typography>

				<slot name="sidebar" />
			</div>

			<main class="w-full overflow-hidden bg-white p-sm pt-0">
				<slot />
			</main>
		</div>

		<div
			v-if="exclusiveTextBottom"
			class="-mt-xl rounded-2xl border border-secondary-alt-400 bg-secondary-alt-200 px-sm pt-xl"
			@click="exclusiveBottomClickAction"
		>
			<ui-typography
				class="py-xxs"
				:size="ETypographySizes.XXS"
				:kind="EColors.SECONDARY"
				:align="ETextAlign.CENTER"
				line-height
			>
				{{ exclusiveTextBottom }}
			</ui-typography>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { UiTypography, ETypographySizes, ETextWeight, ETextAlign } from "../ui-typography";
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
