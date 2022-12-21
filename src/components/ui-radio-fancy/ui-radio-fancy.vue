<template>
	<label
		class="
			ui-radio-fancy
			relative

		"
		:class="disabled && 'pointer-events-none'"
	>
		<input
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			class="peer group appearance-none absolute"
		>
		<div
			class="
				ui-radio-fancy__content
				box-border
				w-full
				h-full
				py-sm px-sm
				border
				border-secondary-alt-500
				bg-white
				hover:border-secondary-alt-700
				cursor-pointer
				rounded-xl

				before:absolute
				before:-z-10
				before:box-border
				before:rounded-[16px]
				before:bg-primary-300

				peer-checked:border-transparent
				peer-checked:active:shadow-border-primary
				peer-checked:active:before:-top-xs
				peer-checked:active:before:-bottom-xs
				peer-checked:active:before:-left-xs
				peer-checked:active:before:-right-xs

				peer-checked:hover:shadow-border-selected
				peer-checked:shadow-selected-shadow

				peer-active:before:-top-xxs
				peer-active:before:-bottom-xxs
				peer-active:before:-left-xxs
				peer-active:before:-right-xxs

				peer-focus:before:-top-xs
				peer-focus:before:-bottom-xs
				peer-focus:before:-left-xs
				peer-focus:before:-right-xs
			"
			:class="disabled && 'pointer-events-none'"
		>
			<ui-icon
				:icon-name="iconName"
				:size="ESize.MD"
				class="mb-md group-checked:text-primary-500"
				:class="value === modelValue && 'text-primary'"
			/>
			<ui-typography
				:size="ETypographySizes.SM"
				:kind="EColors.SECONDARY"
				:weight="ETextWeight.SEMI_BOLD"
			>
				<slot />
			</ui-typography>
		</div>
	</label>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import { EColors } from "../../_types/colors";
	const props = defineProps<{
		modelValue: string;
		name: string;
		value: string | number;
		iconName: TIconName;
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
