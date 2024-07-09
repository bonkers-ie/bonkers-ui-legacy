<template>
	<label
		class="ui-radio-compact relative"
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
				rounded-lg
				border
				border-secondary-alt-500
				bg-white
				before:absolute
				before:-z-10
				before:box-border
				before:rounded-2xl
				before:bg-primary-300
				hover:border-secondary-alt-700
				peer-checked:border-transparent
				peer-checked:shadow-selected-shadow
				peer-checked:hover:shadow-border-selected
				peer-checked:active:shadow-border-primary
				peer-checked:active:before:-bottom-xxs
				peer-checked:active:before:-left-xxs
				peer-checked:active:before:-right-xxs
				peer-checked:active:before:-top-xxs
				peer-focus:before:-bottom-xxs
				peer-focus:before:-left-xxs
				peer-focus:before:-right-xxs
				peer-focus:before:-top-xxs
				peer-active:before:-bottom-xxxs
				peer-active:before:-left-xxxs
				peer-active:before:-right-xxxs
				peer-active:before:-top-xxxs
				"
		>

			<ui-typography
				class="px-md py-sm"
				:size="ETypographySizes.MD"
				line-height
				:align="ETextAlign.CENTER"
			>
				<slot />
			</ui-typography>

		</div>
	</label>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiTypography, { ETypographySizes, ETextAlign } from "../ui-typography";

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
