<template>
	<label
		class="
		ui-radio-compact
		relative
		"
	>
		<input
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			class="group peer absolute appearance-none"
			:disabled="disabled"
		>
		<div
			class="
			ui-radio-compact_content
			box-border
			grid
			cursor-pointer
			items-center
			justify-items-center
			rounded-xl
			border
			border-secondary-alt-500
			bg-white
			before:absolute
			before:-z-10
			before:box-border
			before:rounded-[16px]

			before:bg-primary-300
			hover:border-secondary-alt-700
			peer-checked:border-transparent
			peer-checked:shadow-selected-shadow
			peer-checked:hover:shadow-border-selected

			peer-checked:active:shadow-border-primary
			peer-checked:active:before:-bottom-xs
			peer-checked:active:before:-left-xs
			peer-checked:active:before:-right-xs
			peer-checked:active:before:-top-xs
			peer-focus:before:-bottom-xs

			peer-focus:before:-left-xs
			peer-focus:before:-right-xs

			peer-focus:before:-top-xs
			peer-active:before:-bottom-xxs
			peer-active:before:-left-xxs
			peer-active:before:-right-xxs

			peer-active:before:-top-xxs
			"
		>

			<ui-typography
				:size="ETypographySizes.MD"
			>
				<slot />
			</ui-typography>

		</div>
	</label>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes } from "../ui-typography";
	import { computed } from "vue";

	const props = defineProps<{
		modelValue: string | number | boolean;
		name: string;
		value: string | number | boolean;
		disabled?: boolean;
	}>();
	const emit = defineEmits(["update:modelValue"]);
	const radioModel = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	});
</script>

<style>
	.ui-radio-compact_content{
		min-height: 58px;
		min-width: 58px;
	}

</style>
