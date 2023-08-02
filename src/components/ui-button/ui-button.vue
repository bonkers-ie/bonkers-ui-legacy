<template>
	<button
		class="ui-button
			text-base
			grid
			touch-manipulation
			grid-flow-col
			items-center
			justify-center
			whitespace-nowrap
			rounded-lg
			font-bold
			leading-none
			"
		:disabled="disabled"
		:class="[
			(!kind || kind === EButtonTypes.PRIMARY) && [primaryColor, primaryColorHover, primaryColorActive].join(' '),
			kind === EButtonTypes.SECONDARY
				&& 'bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300',
			kind === EButtonTypes.WARNING
				&& 'bg-warning text-white hover:bg-warning-600 active:bg-warning-700 disabled:bg-warning-300',
			kind === EButtonTypes.ERROR
				&& 'bg-error text-white hover:bg-error-600 active:bg-error-700 disabled:bg-error-300',
			kind === EButtonTypes.PRIMARY_OVERLAY
				&& `border border-primary text-primary hover:border-transparent hover:bg-primary-600
					hover:text-white active:border-transparent active:bg-primary-700
					active:text-white disabled:border-primary-300 disabled:text-primary-300`,
			kind === EButtonTypes.SECONDARY_OVERLAY
				&& `border border-secondary text-secondary hover:border-transparent hover:bg-secondary-600
					hover:text-white active:border-transparent active:bg-secondary-700
					active:text-white disabled:border-secondary-300 disabled:text-secondary-300`,
			kind === EButtonTypes.WARNING_OVERLAY
				&& `border border-warning text-warning hover:border-transparent hover:bg-warning-600
					hover:text-white active:border-transparent active:bg-warning-700
					active:text-white disabled:border-warning-300 disabled:text-warning-300`,
			kind === EButtonTypes.ERROR_OVERLAY
				&& `border border-error text-error hover:border-transparent hover:bg-error-600
					hover:text-white active:border-transparent active:bg-error-700
					active:text-white disabled:border-error-300 disabled:text-error-300`,
			kind === EButtonTypes.LINK && `hover:text-accent-alt-600 active:text-accent-alt-700
				disabled:text-accent-alt-300 text-accent-alt`,
			(!size || size === EButtonSizes.DEFAULT) && 'px-md py-sm',
			size === EButtonSizes.SMALL && 'px-md py-xs',
			size === EButtonSizes.MEDIUM && 'p-sm',
			size === EButtonSizes.LARGE && 'p-md',
			($slots.default || $slots.postfix) && 'gap-sm',
			fullWidth && 'w-full',
			disabled && 'pointer-events-none',
		]"
	>
		<slot name="prefix" />

		<slot />

		<slot name="postfix" />
	</button>
</template>

<script lang="ts" setup>
	import { EButtonSizes, EButtonTypes } from "./_typings";

	type TProps = {
		kind?: EButtonTypes;
		size?: EButtonSizes;
		fullWidth?: boolean;
		disabled?: boolean;
	}

	const primaryColor = "text-white bg-primary disabled:bg-primary-300";
	const primaryColorHover = "hover:bg-primary-600 ";
	const primaryColorActive = "active:bg-primary-700 ";

	withDefaults( defineProps<TProps>(), {
		kind: EButtonTypes.PRIMARY,
		size: EButtonSizes.DEFAULT,
		fullWidth: false,
		disabled: false,
	});
</script>
