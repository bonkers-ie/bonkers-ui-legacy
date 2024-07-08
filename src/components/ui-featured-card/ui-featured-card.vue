<template>
	<div
		class="
			ui-featured-card
			flex
			h-auto
			w-[220px]
			flex-col
			items-center
			justify-center
			rounded-2xl
			border
			border-secondary-alt-300
			p-sm
			"
	>
		<img
			src="./assets/broadband-providers.png"
			alt="some image"
		>
		<slot name="titleSlot">
			<ui-typography
				:size="ETypographySizes.XS"
				:align="ETextAlign.CENTER"
				:weight="ETextWeight.SEMI_BOLD"
				class="mt-xxs"
				line-height
			>
				{{ title }}
			</ui-typography>
		</slot>
		<div class="my-xxs">
			<slot name="priceSlot">
				<ui-typography
					:size="ETypographySizes.LG"
					:align="ETextAlign.CENTER"
					:weight="ETextWeight.SEMI_BOLD"

					line-height
				>
					{{ price }}
				</ui-typography>

				<ui-typography
					:size="ETypographySizes.XS"
					:align="ETextAlign.CENTER"
					:kind="EColors.SECONDARY_300"
					line-height
				>
					{{ description }}
				</ui-typography>
			</slot>
		</div>

		<div
			v-if="specialOffer"
			class="mb-xxs"
		>
			<ui-badge
				:size="EBadgeSize.SMALL"
				:kind="EBadgeKind.ACCENT_ALT"
				rounded
			>
				Save €551.20 on first year
			</ui-badge>
		</div>

		<ui-button
			:size="EButtonSizes.SMALL"
			full-width
		>
			See Details
		</ui-button>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETextAlign, ETextWeight, ETypographySizes,EColors } from "../ui-typography";
	import UiButton, { EButtonSizes } from "../ui-button";
	import UiBadge,{ EBadgeKind,EBadgeSize } from "../ui-badge";

	defineProps<{
		title?: string;
		price?: string;
		description?: string;
		specialOffer?: boolean;
		image: string
	}>();

</script>
