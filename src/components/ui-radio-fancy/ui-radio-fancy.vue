<template>
	<label
		class="ui-radio-fancy"
		:class="disabled && 'pointer-events-none opacity-50'"
	>
		<input
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			class="peer fixed w-0"
			:class="disabled && 'pointer-events-none opacity-50'"
		>
		<div class="ui-radio-fancy__content w-full py-sm px-sm border border-secondary-300 hover:border-secondary-alt-700 cursor-pointer rounded-xl hover:shadow-md active:bg-secondary-alt-200 active:outline active:outline-primary-300 peer-checked:border-primary">
			<ui-icon
				:icon-name="iconName"
				:size="ESize.MD"
				class="mb-md"
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
		id: string;
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

<style scoped>
	/* input[type="radio"]:checked + .ui-radio-fancy__content {
    border: 1px solid var(--color-primary-500)
} */
</style>
