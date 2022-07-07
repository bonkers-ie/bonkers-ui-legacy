<template>
	<div
		class="ui-input grid rounded-md border border-secondary-alt-500 bg-white max-w-xs items-center p-xs gap-xs"
		:class="[
			kind === EInputTypes.PRIMARY && 'border-primary',
			fullWidth && 'max-w-full',
		]"
	>
		<div class="icon-wrapper">
			<slot name="prefix-icon" />
		</div>
		<input
			class="bg-transparent border-0 outline-0"
			type="text"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		>
		<div class="icon-wrapper">
			<slot name="postfix-icon" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { EInputTypes } from "./_typings";

	defineProps<{
		placeholder: string;
		modelValue: string;
		disabled?: boolean;
		fullWidth?: boolean;
		kind?: EInputTypes;
	}>();

	defineEmits(["update:modelValue"]);
</script>

<style scoped>
	.ui-input {
		grid-template-columns: auto 1fr auto;
	}
</style>
