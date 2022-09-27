<template>
	<label
		class="ui-radio-item block p-sm border rounded-2xl hover:border-primary cursor-pointer bg-white"
		:class="[
			isActive ? 'border-primary pointer-events-none':'border-secondary-alt',
		]"
	>
		<input
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			class="appearance-none absolute"
		>

		<ui-icon
			:icon-name="iconName"
			:size="ESize.MD"
			class="mb-md"
			:class="isActive && 'text-primary'"
		/>
		<ui-typography
			:size="ETypographySizes.SM"
			:kind="EColors.SECONDARY"
			:weight="ETextWeight.SEMI_BOLD"
		>
			{{ title }}
		</ui-typography>
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
		title: string;
		iconName: TIconName;
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

	const isActive = computed(()=>props.modelValue === props.value);
</script>
