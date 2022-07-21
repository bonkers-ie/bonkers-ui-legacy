<template>
	<label
		class="ui-radio-item block p-sm border border-secondary-alt rounded-2xl hover:border-primary hover:text-primary cursor-pointer"
		:class="[
			isActive && 'bg-primary text-white pointer-events-none',
		]"
	>
		<input
			:id="value"
			v-model="localValue"
			type="radio"
			:name="name"
			:value="value"
			class="appearance-none absolute"
			@input="$emit('update:modelValue', $event.target.value)"
		>

		<ui-icon
			:icon-name="iconName"
			:size="ESize.MD"
			class-name="mb-md"
		/>
		<ui-typography
			:size="ETypographySizes.SM"
			:kind="isActive ? EColors.WHITE : EColors.SECONDARY"
			:weight="ETextWeight.SEMI_BOLD"
		>
			{{ title }}
		</ui-typography>
	</label>
</template>

<script lang="ts" setup>
	import { computed, ref, watch } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../../ui-typography";
	import UiIcon, { TIconName } from "../../ui-icon";
	import { ESize } from "../../../_types/sizing";
	import { EColors } from "../../../_types/colors";

	const props = defineProps< {
		className?: string;
		modelValue: string;
		name: string;
		value: string;
		title: string;
		iconName: TIconName;
	}>();

	defineEmits(["update:modelValue"]);

	const localValue = ref(props.modelValue);

	watch(()=>props.modelValue, (newValue)=>{
		if(newValue !== localValue.value){
			localValue.value = newValue;
		}
	});

	const isActive = computed(()=>props.modelValue === props.value);
</script>

<style>
	.ui-radio-item input:checked + .ui-radio-custom {
		background-color: #f5f5f5;
	}
</style>
