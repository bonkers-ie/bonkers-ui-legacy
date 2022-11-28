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
			class="peer group appearance-none absolute"
		>
		<div
			class="
				ui-radio-fancy__content
				box-border
				w-full
				py-sm px-sm
				border
				border-secondary-alt-500
				bg-white
				hover:border-secondary-alt-700
				cursor-pointer
				rounded-xl
				active:bg-secondary-alt-200
				peer-checked:border-transparent
				peer-checked:active:shadow-border-primary
				peer-checked:hover:shadow-border-selected
				peer-checked:shadow-selected-shadow
				peer-checked:before:absolute
				peer-checked:before:-top-xs
				peer-checked:before:-bottom-xs
				peer-checked:before:-left-xs
				peer-checked:before:-right-xs
				peer-checked:before:bg-primary-300
				peer-checked:before:rounded-[20px]
				peer-checked:before:box-border
				peer-checked:before:-z-10
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
