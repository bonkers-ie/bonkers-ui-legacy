<template>
	<component
		:is="is || 'p'"
		class="ui-typography"
		:class="[
			'leading-none',
			(!size || size === ETypographySizes.MD) && 'text-md',
			size === ETypographySizes.XXS && 'text-xxs',
			size === ETypographySizes.XS && 'text-xs',
			size === ETypographySizes.SM && 'text-sm',
			size === ETypographySizes.LG && 'text-lg',
			size === ETypographySizes.XL && 'text-xl',
			size === ETypographySizes.XXL && 'text-2xl',
			size === ETypographySizes.XXXL && 'text-3xl',
			size === ETypographySizes.XXXXL && 'text-4xl',
			size === ETypographySizes.XXXXXL && 'text-5xl',

			kind === EColors.WHITE && 'text-white',
			kind === EColors.BLACK && 'text-black',
			kind === EColors.TRANSPARENT && 'text-transparent',
			kind === EColors.CURRENT && 'text-current',

			kind === EColors.PRIMARY && 'text-primary',
			kind === EColors.PRIMARY_300 && 'text-primary-300',
			kind === EColors.PRIMARY_400 && 'text-primary-400',
			kind === EColors.PRIMARY_500 && 'text-primary-500',
			kind === EColors.PRIMARY_600 && 'text-primary-600',
			kind === EColors.PRIMARY_700 && 'text-primary-700',

			kind === EColors.PRIMARY_ALT && 'text-primary',
			kind === EColors.PRIMARY_ALT_300 && 'text-primary-300',
			kind === EColors.PRIMARY_ALT_400 && 'text-primary-400',
			kind === EColors.PRIMARY_ALT_500 && 'text-primary-500',
			kind === EColors.PRIMARY_ALT_600 && 'text-primary-600',
			kind === EColors.PRIMARY_ALT_700 && 'text-primary-700',

			kind === EColors.SECONDARY && 'text-secondary',
			kind === EColors.SECONDARY_300 && 'text-secondary-300',
			kind === EColors.SECONDARY_400 && 'text-secondary-400',
			kind === EColors.SECONDARY_500 && 'text-secondary-500',
			kind === EColors.SECONDARY_600 && 'text-secondary-600',
			kind === EColors.SECONDARY_700 && 'text-secondary-700',

			kind === EColors.WARNING && 'text-warning',
			kind === EColors.WARNING_300 && 'text-warning-300',
			kind === EColors.WARNING_400 && 'text-warning-400',
			kind === EColors.WARNING_500 && 'text-warning-500',
			kind === EColors.WARNING_600 && 'text-warning-600',
			kind === EColors.WARNING_700 && 'text-warning-700',

			kind === EColors.ERROR && 'text-error',
			kind === EColors.ERROR_300 && 'text-error-300',
			kind === EColors.ERROR_400 && 'text-error-400',
			kind === EColors.ERROR_500 && 'text-error-500',
			kind === EColors.ERROR_600 && 'text-error-600',
			kind === EColors.ERROR_700 && 'text-error-700',

			kind === EColors.ACCENT && 'text-accent',
			kind === EColors.ACCENT_300 && 'text-accent-300',
			kind === EColors.ACCENT_500 && 'text-accent-500',
			kind === EColors.ACCENT_600 && 'text-accent-600',
			kind === EColors.ACCENT_700 && 'text-accent-700',

			kind === EColors.ACCENT_ALT && 'text-accent-alt',
			kind === EColors.ACCENT_ALT_500 && 'text-accent-alt-500',

			kind === EColors.SECONDARY_ALT && 'text-secondary-alt',
			kind === EColors.SECONDARY_ALT_200 && 'text-secondary-alt-200',
			kind === EColors.SECONDARY_ALT_300 && 'text-secondary-alt-300',
			kind === EColors.SECONDARY_ALT_400 && 'text-secondary-alt-400',
			kind === EColors.SECONDARY_ALT_500 && 'text-secondary-alt-500',
			kind === EColors.SECONDARY_ALT_600 && 'text-secondary-alt-600',
			kind === EColors.SECONDARY_ALT_700 && 'text-secondary-alt-700',

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

			className
		]"
	>
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from "./_typings";
	import { EColors } from "../../_types/colors";

	defineProps<{
		className?: string;
		align?: ETextAlign;
		size?: ETypographySizes;
		kind?: EColors;
		weight?: ETextWeight;
		lineHeight?: boolean;
		textTransform?: ETextTransform;
		is?: string;
	}>();
</script>

<style scoped>
	.ui-typography_line-height {
		line-height: var(--base-line-height);
	}
</style>
