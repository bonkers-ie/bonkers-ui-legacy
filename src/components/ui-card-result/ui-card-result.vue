<template>
	<div class="ui-card-result">
		<div
			v-if="exclusiveText"
			class="bg-primary rounded-2xl px-sm pb-lg -mb-lg"
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

		<div class="flex border border-secondary-alt-400 rounded-2xl overflow-hidden">
			<main class="p-sm bg-white w-full overflow-hidden">
				<div class="flex gap-xs justify-between items-center rounded-lg bg-secondary-alt-200 p-xs mb-sm">
					<ui-typography
						v-if="header"
						line-height
						class="flex-1 truncate"
						:size="ETypographySizes.SM"
						:weight="ETextWeight.SEMI_BOLD"
					>
						{{ header }}
					</ui-typography>

					<slot name="sidebar" />
				</div>

				<slot />
			</main>
		</div>

		<div
			v-if="exclusiveTextBottom"
			class="bg-secondary rounded-2xl px-sm pt-lg -mt-lg"
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
