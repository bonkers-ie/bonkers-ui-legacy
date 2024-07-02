<template>
	<label
		class="ui-radio-fancy relative"
		:class="disabled && 'pointer-events-none'"
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
				ui-radio-fancy__content
				rounded-xxxxl
				box-border
				size-full
				cursor-pointer
				border
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
			:class="[
				disabled
					&& 'pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled',
				radioSize === ERadioSizes.MINIMAL && 'flex gap-sm align-middle',
				radioSize === ERadioSizes.COMPACT && 'grid cursor-pointer grid-flow-col px-md'

			]"
		>
			<div
				v-if="radioSize === ERadioSizes.DEFAULT && iconName"
			>
				<ui-icon
					:icon-name="iconName"
					:size="ESize.MD"
					class="mb-md peer-checked:text-primary-500"
					:class="[value === modelValue && 'text-primary',
						disabled && 'text-secondary-alt-400',
						disabled && value === modelValue && 'text-primary-300'
					]"
				/>
			</div>
			<div v-else-if="radioSize === ERadioSizes.MINIMAL && iconName">
				<ui-icon
					:icon-name="iconName"
					:size="ESize.MD"
					:class="[value === modelValue && 'text-primary',
						disabled && 'text-secondary-alt-400',
						disabled && value === modelValue && 'text-primary-300'
					]"
				/>

			</div>
			<div
				v-else-if="radioSize === ERadioSizes.COMPACT"
			/>
			<ui-typography
				:size="ETypographySizes.SM"
				:kind="EColors.SECONDARY"
				class="pt-xxxs"
			>
				<slot />
			</ui-typography>
		</div>
	</label>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiTypography, { ETypographySizes } from "../ui-typography";
	import type { TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import { EColors } from "../../_types/colors";
	import { ERadioSizes } from "./_typings";
	import uiIcon from "../ui-icon";

	const props = withDefaults(defineProps<{
		modelValue: string | number | boolean;
		name: string;
		value: string | number | boolean;
		iconName?: TIconName;
		disabled?: boolean;
		radioSize?: ERadioSizes;
	}>(), {
		radioSize: ERadioSizes.DEFAULT,
		iconName: undefined
	});
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
