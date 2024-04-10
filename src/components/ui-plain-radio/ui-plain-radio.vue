<template>
	<label
		class="ui-plain-radio relative mb-sm"
		:for="name + value"
	>

		<input
			:id="name + value"
			v-model="radioModel"
			:value="value"
			name="ui-plain-radio"
			type="radio"
			:disabled="disabled"
			class="peer absolute appearance-none"
		>

		<div
			class="ui-plain-radio__content
				box-border
				grid
				size-full
				cursor-pointer
				grid-flow-col
				items-center
				justify-start
				gap-sm
				rounded-xl border
				border-secondary-alt-500
				bg-white
				p-sm
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
				peer-active:before:-top-xxs"
			:class="disabled
				&& 'pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled'"
		>
			<ui-radio
				v-model="radioModel"
				:value="value.toString()"
				:name="name"
				:disabled="disabled"
				class="pointer-events-none"
			/>

			<span>
				<slot name="header">
					<ui-typography
						:size="ETypographySizes.SM"
						:kind="EColors.SECONDARY"
						:weight="ETextWeight.SEMI_BOLD"
						line-height
					>
						{{ header }}
					</ui-typography>
				</slot>

				<slot name="subHeader">
					<ui-typography
						:size="ETypographySizes.XS"
						:kind="EColors.SECONDARY_ALT"
					>
						{{ subHeader }}
					</ui-typography>
				</slot>
			</span>
		</div>
	</label>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiRadio from "../ui-radio";
	import UiTypography, { ETypographySizes, EColors, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		modelValue: string | number | boolean;
		header?: string;
		subHeader?: string;
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
			emit ("update:modelValue", value);
		}
	});
</script>
