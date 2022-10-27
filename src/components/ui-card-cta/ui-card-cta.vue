<template>
	<button
		class="ui-card-cta w-full outline-0 border border-secondary-alt-500 rounded-2xl p-sm shadow-md hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:bg-secondary-alt-200 disabled:pointer-events-none"
		:disabled="disabled"
	>
		<span
			class="ui-card-cta__wrapper w-full grid gap-sm items-center"
			:class="[
				invertOrder && 'ui-card-cta_inverted',
			]"
		>
			<slot name="icon" />
			<span
				v-if="$slots.title && $slots.description"
				class="w-full"
				:class="invertOrder && 'order-first'"
			>
				<ui-typography
					:kind="EColors.SECONDARY"
					:weight="ETextWeight.SEMI_BOLD"
					class="mb-xxs"
				>
					<slot name="title" />
				</ui-typography>

				<ui-typography
					:kind="EColors.SECONDARY_300"
					:size="ETypographySizes.SM"
				>
					<slot name="description" />
				</ui-typography>
			</span>
		</span>
	</button>
</template>

<script lang="ts" setup>
	import UiTypography from "../ui-typography";
	import { ETypographySizes, ETextWeight } from "../ui-typography";
	import { EColors } from "../../_types/colors";

	defineProps<{
		invertOrder?: boolean;
		disabled?: boolean;
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
