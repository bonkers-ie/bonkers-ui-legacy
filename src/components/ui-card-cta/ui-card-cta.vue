<template>
	<button
		class="
			ui-card-cta
			w-full
			rounded-2xl
			border
			border-secondary-alt-500
			bg-white
			p-sm
			shadow-md
			outline-0
			hover:border-secondary-700
			focus:shadow-border-primary
			active:bg-secondary-alt-200
			disabled:pointer-events-none
			disabled:bg-secondary-alt-200"
		:disabled="disabled"
	>
		<span
			class="ui-card-cta__wrapper grid w-full items-center gap-sm"
			:class="[
				invertOrder && 'ui-card-cta_inverted',
			]"
		>
			<slot name="icon">
				<ui-icon-wrapper>
					<ui-icon
						v-if="iconName"
						:icon-name="iconName"
						:size="ESize.SM"
						class="text-secondary-400"
					/>
				</ui-icon-wrapper>
			</slot>
			<span
				v-if="$slots.title && $slots.description"
				class="w-full"
				:class="invertOrder && 'order-first'"
			>
				<ui-typography
					:kind="EColors.SECONDARY_400"
					class="mb-xxs"
					line-height
				>
					<slot name="title" />
				</ui-typography>

				<ui-typography
					:kind="EColors.SECONDARY_300"
					:size="ETypographySizes.SM"
					line-height
				>
					<slot name="description" />
				</ui-typography>
			</span>
		</span>
	</button>
</template>

<script lang="ts" setup>
	import UiTypography from "../ui-typography";
	import UiIcon from "../ui-icon";
	import UiIconWrapper from "../ui-icon-wrapper";
	import { ETypographySizes } from "../ui-typography";
	import { EColors } from "../../_types/colors";
	import type { TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";

	defineProps<{
		invertOrder?: boolean;
		disabled?: boolean;
		iconName?: TIconName
	}>();

</script>

<style scoped>
	.ui-card-cta {
		text-align: unset;
	}

	.ui-card-cta__wrapper {
		grid-template-columns: auto 1fr;
	}

	.ui-card-cta:disabled .ui-card-cta__wrapper {
		opacity: 0.5;
	}

	.ui-card-cta_inverted {
		grid-template-columns: 1fr auto;
	}
</style>
