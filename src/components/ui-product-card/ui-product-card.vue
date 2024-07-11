<template>
	<div
		class="
			relative
			flex
			flex-col
			justify-between
			gap-sm
			rounded-2xl
			border
			border-secondary-alt-300
			bg-white
			px-xs
			py-sm
			"
	>
		<ui-badge
			v-if="badgeText"
			class="!absolute -top-xxs right-xs"
			:kind="EBadgeKind.ACCENT_ALT"
			rounded
		>
			{{ badgeText }}
		</ui-badge>
		<slot name="header" />

		<div class="grid gap-xxs">
			<slot name="title">
				<ui-typography
					v-if="title"
					:size="ETypographySizes.MD"
					:weight="ETextWeight.SEMI_BOLD"
					:align="ETextAlign.LEFT"
					line-height
				>
					{{ title }}
				</ui-typography>
			</slot>

			<slot name="subtitle">
				<ui-typography
					v-if="subtitle"
					:size="ETypographySizes.XS"
					:align="ETextAlign.LEFT"
					:kind="EColors.SECONDARY_300"
					line-height
				>
					{{ subtitle }}
				</ui-typography>
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETextWeight, ETextAlign, ETypographySizes, EColors } from "../ui-typography";
	import UiBadge, { EBadgeKind } from "../ui-badge";

	defineProps<{
		badgeText?: string

		title?: string;
		subtitle?: string;
	}>();

</script>
