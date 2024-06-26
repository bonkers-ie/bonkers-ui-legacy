<template>
	<button
		class="
			ui-card-cta
			group
			w-full
			rounded-2xl
			border
			border-secondary-alt-500
			bg-white
			p-sm
			text-left
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
			class="group-disabled:opcity-50 grid w-full items-center gap-sm"
			:class="{
				'grid-cols-[auto,1fr]': !invertOrder,
				'grid-cols-[1fr,auto]': invertOrder,
			}"
		>
			<slot name="iconSlot">
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
				class="w-full"
				:class="invertOrder && 'order-first'"
			>
				<slot name="titleSlot">
					<ui-typography
						:kind="EColors.SECONDARY_400"
						class="mb-xxxs"
						line-height
					>
						{{ title }}
					</ui-typography>
				</slot>

				<slot name="descriptionSlot">
					<ui-typography
						:kind="EColors.SECONDARY_300"
						:size="ETypographySizes.SM"
						line-height
					>
						{{ description }}
					</ui-typography>
				</slot>
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
		iconName?: TIconName;
		title?: string;
		description?: string;
	}>();
</script>
