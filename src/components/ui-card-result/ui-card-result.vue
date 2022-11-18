<template>
	<div class="ui-card-result__wrapper">
		<div
			v-if="exclusiveText"
			class="ui-card-result__exclusive bg-primary rounded-2xl px-sm pb-lg -mb-lg"
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

		<div class="ui-card-result flex border border-secondary-alt rounded-2xl overflow-hidden">
			<div
				v-if="slots.sidebar"
				class="ui-card-result__sidebar bg-secondary-alt-200 p-sm w-xl border-r border-secondary-alt flex items-center justify-center text-center"
			>
				<slot name="sidebar" />
			</div>

			<main class="p-sm bg-white w-full overflow-hidden">
				<ui-typography
					v-if="header"
					class="mb-xs"
					:size="ETypographySizes.SM"
					:weight="ETextWeight.SEMI_BOLD"
				>
					{{ header }}
				</ui-typography>
				<slot />
			</main>
		</div>

		<div
			v-if="exclusiveTextBottom"
			class="ui-card-result__exclusive_bottom bg-secondary rounded-2xl px-sm pt-lg -mt-lg"
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
	import { useSlots } from "vue";

	const slots = useSlots();

	defineProps<{
		header?: string;
		exclusiveText?: string;
		exclusiveTextBottom?: string;
	}>();

</script>
