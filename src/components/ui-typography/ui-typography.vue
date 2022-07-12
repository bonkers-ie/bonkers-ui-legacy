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
			kind === ETypographyColors.SECONDARY && 'text-secondary',
			kind === ETypographyColors.WARNING && 'text-warning',
			kind === ETypographyColors.ERROR && 'text-error',

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
