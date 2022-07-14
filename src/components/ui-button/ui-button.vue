<template>
	<button
		class="text-base text-white rounded-md whitespace-nowrap font-bold leading-none"
		:disabled="disabled"
		:class="[
			(!kind || kind === EButtonTypes.PRIMARY) && [primaryColor, primaryColorHover, primaryColorActive].join(' '),
			kind === EButtonTypes.SECONDARY && 'bg-secondary hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300',
			kind === EButtonTypes.WARNING && 'bg-warning hover:bg-warning-600 active:bg-warning-700 disabled:bg-warning-300',
			kind === EButtonTypes.ERROR && 'bg-error hover:bg-error-600 active:bg-error-700 disabled:bg-error-300',
			kind === EButtonTypes.PRIMARY_OVERLAY
				&& 'text-primary border border-primary hover:bg-primary-600 hover:border-transparent hover:text-white active:bg-primary-700 active:border-transparent active:text-white disabled:text-primary-300 disabled:border-primary-300',
			kind === EButtonTypes.SECONDARY_OVERLAY
				&& 'text-secondary border border-secondary hover:bg-secondary-600 hover:border-transparent hover:text-white active:bg-secondary-700 active:border-transparent active:text-white disabled:text-secondary-300 disabled:border-secondary-300',
			kind === EButtonTypes.WARNING_OVERLAY
				&& 'text-warning border border-warning hover:bg-warning-600 hover:border-transparent hover:text-white active:bg-warning-700 active:border-transparent active:text-white disabled:text-warning-300 disabled:border-warning-300',
			kind === EButtonTypes.ERROR_OVERLAY
				&& 'text-error border border-error hover:bg-error-600 hover:border-transparent hover:text-white active:bg-error-700 active:border-transparent active:text-white disabled:text-error-300 disabled:border-error-300',
			kind === EButtonTypes.LINK && 'text-accent-alt hover:text-accent-alt-600 active:text-accent-alt-700 disabled:text-accent-alt-300',
			(!size || size === EButtonSizes.MEDIUM) && 'py-sm px-md',
			size === EButtonSizes.SMALL && 'py-xs px-md',
			size === EButtonSizes.LARGE && 'py-md px-md',
			fullWidth && 'w-full',
			disabled && 'pointer-events-none',
			classes
		]"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
	import { EButtonSizes, EButtonTypes } from "./_typings";
	type TProps = {
		classes?: string;
		kind?: EButtonTypes;
		size?: EButtonSizes;
		fullWidth?: boolean;
		disabled?: boolean;
	}

	const primaryColor = "bg-primary disabled:bg-primary-300";
	const primaryColorHover = "hover:bg-primary-600 ";
	const primaryColorActive = "active:bg-primary-700 ";
	defineProps<TProps>();
</script>
