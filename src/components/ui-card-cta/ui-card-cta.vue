<template>
	<button
		class="ui-card-cta outline-0 border border-secondary-alt-500 rounded-2xl p-sm shadow-m hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:bg-secondary-alt-200"
		:disabled="disabled"
		:class="[!fullWidth && 'ui-card-cta_cropped', className]"
	>
		<span
			class="ui-card-cta__wrapper grid gap-sm items-center"
			:class="[
				invertOrder && 'ui-card-cta_inverted',
			]"
		>
			<slot name="icon" />
			<span
				v-if="slots.title && slots.description"
				class="ui-card-cta__text-wrapper"
				:class="invertOrder && 'order-first'"
			>
				<ui-typography
					:kind="ETypographyColors.SECONDARY"
					:weight="ETextWeight.SEMI_BOLD"
					class-name="mb-xxs"
				>
					<slot name="title" />
				</ui-typography>

				<ui-typography
					:kind="ETypographyColors.SECONDARY_300"
					:size="ETypographySizes.SM"
				>
					<slot name="description" />
				</ui-typography>
			</span>
		</span>
	</button>
</template>

<script lang="ts" setup>
	import { useSlots } from "vue";
	import UiTypography from "../ui-typography";
	import { ETypographyColors, ETypographySizes, ETextWeight } from "../ui-typography/_typings";

	const slots = useSlots();

	defineProps<{
		className?: string;
		invertOrder?: boolean;
		fullWidth?: boolean;
		disabled?: boolean;
	}>();

</script>

<style scoped>
	.ui-card-cta {
		text-align: unset;
		width: 100%;
	}

	.ui-card-cta:disabled {
		pointer-events: none;
	}

	.ui-card-cta__wrapper {
		grid-template-columns: auto 1fr;
		width: 100%;
	}

	.ui-card-cta:disabled .ui-card-cta__wrapper {
		opacity: 0.5;
	}

	.ui-card-cta__text-wrapper {
		width: 100%;
	}

	.ui-card-cta_cropped {
		max-width: 382px;
	}

	.ui-card-cta_inverted {
		grid-template-columns: 1fr auto;
	}
</style>
