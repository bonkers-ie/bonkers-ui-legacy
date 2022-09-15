EInputKinds<template>
	<div class="ui-input">
		<ui-typography
			v-if="heading"
			:weight="ETextWeight.BOLD"
			class="mb-sm"
		>
			{{ heading }}
		</ui-typography>
		<div
			class="ui-input__wrapper flex w-full rounded-lg border bg-white items-center p-sm gap-xs"
			:class="[
				!kind && 'border-secondary-alt-500 hover:border-secondary-alt-700',
				kind === EInputKinds.PRIMARY && 'border-primary',
				kind === EInputKinds.ERROR && 'border-error',

				disabled && 'border-secondary-alt-300 bg-secondary-alt-200',
			]"
		>
			<slot name="prefix-icon" />

			<input
				class="bg-transparent border-0 outline-none w-full"
				:type="type || 'text'"
				:placeholder="placeholder"
				:value="modelValue"
				:pattern="pattern"
				@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
			>

			<slot name="postfix-icon" />
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
	import { EInputKinds, EInputType } from "./_typings";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	defineProps<{
		placeholder?: string;
		modelValue: string;
		disabled?: boolean;
		kind?: EInputKinds;
		heading?: string;
		subLabel?: string;
		type?: EInputType;
		pattern?: string;
	}>();

	defineEmits(["update:modelValue"]);
</script>

<style scoped>
	.ui-input__wrapper input::placeholder {
		color: var(--color-secondary-alt-500);
		font-style: italic;
	}
</style>
