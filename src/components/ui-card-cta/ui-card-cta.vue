<template>
	<div
		class="ui-card-cta grid gap-sm items-center border border-secondary-alt-500 rounded-2xl p-sm"
		:class="[
			invertOrder && 'ui-card-cta_inverted',
			!fullWidth && 'ui-card-cta_cropped',
			disabled && 'opacity-50',
			className
		]"
	>
		<slot name="icon" />
		<div
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
		</div>
	</div>
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
		grid-template-columns: auto 1fr;
		width: 100%;
	}

	.ui-card-cta_cropped {
		max-width: 382px;
	}

	.ui-card-cta_inverted {
		grid-template-columns: 1fr auto;
	}
</style>
