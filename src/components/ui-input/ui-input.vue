<template>
	<div class="ui-input">
		<ui-typography
			v-if="heading"
			:weight="ETextWeight.BOLD"
			class="mb-sm"
		>
			{{ heading }}
		</ui-typography>
		<div
			class="ui-input__wrapper grid rounded-lg border bg-white max-w-xs items-center p-sm gap-xs"
			:class="[
				!kind && 'border-secondary-alt-500 hover:border-secondary-alt-700',
				kind === EInputTypes.PRIMARY && 'border-primary',
				kind === EInputTypes.ERROR && 'border-error',

				disabled && 'border-secondary-alt-300 bg-secondary-alt-200',

				fullWidth && 'max-w-full',
			]"
		>
			<div class="icon-wrapper">
				<slot name="prefix-icon" />
			</div>
			<input
				class="bg-transparent border-0 outline-none"
				type="text"
				:placeholder="placeholder"
				:value="modelValue"
				@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
			>
			<div class="icon-wrapper">
				<slot name="postfix-icon" />
			</div>
		</div>
		<ui-typography
			v-if="subLabel"
			:size="ETypographySizes.SM"
			class="mt-sm"
		>
			{{ subLabel }}
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { EInputTypes } from "./_typings";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	defineProps<{
		placeholder?: string;
		modelValue: string;
		disabled?: boolean;
		fullWidth?: boolean;
		kind?: EInputTypes;
		heading?: string;
		subLabel?: string;
	}>();

	defineEmits(["update:modelValue"]);
</script>

<style scoped>
	.ui-input__wrapper {
		grid-template-columns: auto 1fr auto;
	}

	.ui-input__wrapper input::placeholder {
		color: var(--color-secondary-alt-500);
		font-style: italic;
	}
</style>
