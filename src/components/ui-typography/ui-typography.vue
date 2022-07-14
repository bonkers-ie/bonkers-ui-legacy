<template>
	<component
		:is="is || 'p'"
		class="ui-typography"
		:class="[
			'leading-none',
			(!size || size === ETypographySizes.M) && 'text-m',
			size === ETypographySizes.XXS && 'text-xxs',
			size === ETypographySizes.XS && 'text-xs',
			size === ETypographySizes.SM && 'text-sm',
			size === ETypographySizes.LG && 'text-lg',
			size === ETypographySizes.XL && 'text-xl',
			size === ETypographySizes.XXL && 'text-2xl',
			size === ETypographySizes.XXXL && 'text-3xl',
			size === ETypographySizes.XXXXL && 'text-4xl',
			size === ETypographySizes.XXXXXL && 'text-5xl',

			kind === ETypographyColors.PRIMARY && 'text-primary',
			kind === ETypographyColors.PRIMARY_300 && 'text-primary-300',
			kind === ETypographyColors.PRIMARY_400 && 'text-primary-400',
			kind === ETypographyColors.PRIMARY_600 && 'text-primary-600',
			kind === ETypographyColors.PRIMARY_700 && 'text-primary-700',

			kind === ETypographyColors.SECONDARY && 'text-secondary',
			kind === ETypographyColors.SECONDARY_300 && 'text-secondary-300',
			kind === ETypographyColors.SECONDARY_400 && 'text-secondary-400',
			kind === ETypographyColors.SECONDARY_600 && 'text-secondary-600',
			kind === ETypographyColors.SECONDARY_700 && 'text-secondary-700',

			kind === ETypographyColors.WARNING && 'text-warning',
			kind === ETypographyColors.WARNING_300 && 'text-warning-300',
			kind === ETypographyColors.WARNING_400 && 'text-warning-400',
			kind === ETypographyColors.WARNING_600 && 'text-warning-600',
			kind === ETypographyColors.WARNING_700 && 'text-warning-700',

			kind === ETypographyColors.ERROR && 'text-error',
			kind === ETypographyColors.ERROR_300 && 'text-error-300',
			kind === ETypographyColors.ERROR_400 && 'text-error-400',
			kind === ETypographyColors.ERROR_600 && 'text-error-600',
			kind === ETypographyColors.ERROR_700 && 'text-error-700',

			weight === ETextWeight.LIGHT && 'font-light',
			weight === ETextWeight.REGULAR && 'font-medium',
			weight === ETextWeight.SEMI_BOLD && 'font-bold',
			weight === ETextWeight.BOLD && 'font-black',

			align === ETextAlign.LEFT && 'text-left',
			align === ETextAlign.CENTER && 'text-center',
			align === ETextAlign.RIGHT && 'text-right',

			textTransform === ETextTransform.LOWERCASE && 'lowercase',
			textTransform === ETextTransform.UPPERCASE && 'uppercase',

			lineHeight && 'ui-typography_line-height',

			classes
		]"
	>
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import type { Component } from "vue";
	import { ETextAlign, ETextTransform, ETextWeight, ETypographyColors, ETypographySizes } from "./_typings";

	defineProps<{
		classes?: string;
		align?: ETextAlign;
		size?: ETypographySizes;
		kind?: ETypographyColors;
		weight?: ETextWeight;
		lineHeight?: boolean;
		textTransform?: ETextTransform;
		is?: string | Component;
	}>();
</script>

<style scoped>
	.ui-typography_line-height {
		line-height: var(--base-line-height);
	}
</style>
