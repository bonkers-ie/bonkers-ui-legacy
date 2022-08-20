<template>
	<button
		class="ui-button justify-center grid text-base rounded-lg whitespace-nowrap font-bold leading-none touch-manipulation items-center"
		:disabled="disabled"
		:class="[
			(!kind || kind === EButtonTypes.PRIMARY) && [primaryColor, primaryColorHover, primaryColorActive].join(' '),
			kind === EButtonTypes.SECONDARY && 'text-white bg-secondary hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-300',
			kind === EButtonTypes.WARNING && 'text-white bg-warning hover:bg-warning-600 active:bg-warning-700 disabled:bg-warning-300',
			kind === EButtonTypes.ERROR && 'text-white bg-error hover:bg-error-600 active:bg-error-700 disabled:bg-error-300',
			kind === EButtonTypes.PRIMARY_OVERLAY
				&& 'text-primary border border-primary hover:bg-primary-600 hover:border-transparent hover:text-white active:bg-primary-700 active:border-transparent active:text-white disabled:text-primary-300 disabled:border-primary-300',
			kind === EButtonTypes.SECONDARY_OVERLAY
				&& 'text-secondary border border-secondary hover:bg-secondary-600 hover:border-transparent hover:text-white active:bg-secondary-700 active:border-transparent active:text-white disabled:text-secondary-300 disabled:border-secondary-300',
			kind === EButtonTypes.WARNING_OVERLAY
				&& 'text-warning border border-warning hover:bg-warning-600 hover:border-transparent hover:text-white active:bg-warning-700 active:border-transparent active:text-white disabled:text-warning-300 disabled:border-warning-300',
			kind === EButtonTypes.ERROR_OVERLAY
				&& 'text-error border border-error hover:bg-error-600 hover:border-transparent hover:text-white active:bg-error-700 active:border-transparent active:text-white disabled:text-error-300 disabled:border-error-300',
			kind === EButtonTypes.LINK && 'text-accent-alt hover:text-accent-alt-600 active:text-accent-alt-700 disabled:text-accent-alt-300',
			(!size || size === EButtonSizes.DEFAULT) && 'py-sm px-md',
			size === EButtonSizes.SMALL && 'py-xs px-md',
			size === EButtonSizes.MEDIUM && 'py-xs px-xs',
			size === EButtonSizes.LARGE && 'py-md px-md',
			fullWidth && 'w-full',
			disabled && 'pointer-events-none',
		]"
	>
		<span
			v-if="slots.prefix"
			class="ui-button__prefix"
			:class="(slots.default || slots.postfix) && 'mr-sm'"
		>
			<slot name="prefix" />
		</span>

		<span>
			<slot />
		</span>

		<span
			v-if="slots.postfix"
			class="ui-button__postfix"
			:class="(slots.default || slots.prefix) && 'ml-sm'"
		>
			<slot name="postfix" />
		</span>
	</button>
</template>

<script lang="ts" setup>
	import { EButtonSizes, EButtonTypes } from "./_typings";
	import { useSlots } from "vue";
	type TProps = {
		kind?: EButtonTypes;
		size?: EButtonSizes;
		fullWidth?: boolean;
		disabled?: boolean;
	}

	const slots = useSlots();

	const primaryColor = "text-white bg-primary disabled:bg-primary-300";
	const primaryColorHover = "hover:bg-primary-600 ";
	const primaryColorActive = "active:bg-primary-700 ";

	defineProps<TProps>();
</script>

<style>
	.ui-button {
		grid-template-columns: auto auto auto;
	}
</style>
