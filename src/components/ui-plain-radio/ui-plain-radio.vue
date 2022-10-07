<template>
	<label
		class="ui-plain-radio grid grid-flow-col justify-start items-center gap-sm border p-sm rounded-lg cursor-pointer"
		:class="[
			isActive ? 'border-primary':'border-secondary-alt',
			disabled && 'pointer-events-none border-secondary-alt-400'
		]"
	>
		<ui-radio
			v-model="radioModel"
			:name="name"
			:value="value"
			:disabled="disabled"
		/>

		<span class="text-wrapper">
			<ui-typography
				:size="ETypographySizes.SM"
				:kind="EColors.SECONDARY"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ header }}
			</ui-typography>

			<ui-typography
				:size="ETypographySizes.XS"
				:kind="EColors.SECONDARY_ALT"
			>
				{{ subHeader }}
			</ui-typography>
		</span>
	</label>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiRadio from "../ui-radio";
	import UiTypography, { ETypographySizes, EColors, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		modelValue: string;
		header: string;
		subHeader: string;
		name: string;
		value: string;
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

	const isActive = computed(() => props.modelValue === props.value);
</script>
