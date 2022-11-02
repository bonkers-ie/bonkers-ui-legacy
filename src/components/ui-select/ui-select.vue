<template>
	<div class="ui-select">
		<ui-typography
			v-if="heading"
			:weight="ETextWeight.SEMI_BOLD"
			class="mb-sm"
		>
			{{ heading }}
		</ui-typography>
		<div
			class="relative rounded-lg border bg-white border-secondary-alt-500 hover:border-secondary-alt-700"
			:class="[disabled && 'pointer-events-none bg-secondary-alt-200 border-secondary-alt-300']"
		>
			<select
				v-model="radioModel"
				class="appearance-none bg-transparent border-0 m-0 outline-0 w-full p-sm cursor-pointer italic text-secondary-alt"
			>
				<slot />
			</select>

			<div class="ui-select__icon-wrapper absolute right-sm">
				<slot name="postfix-icon" />
			</div>
		</div>
		<ui-typography
			v-if="subLabel"
			:size="ETypographySizes.SM"
			class="mt-sm"
		>
			{{ subLabel }}
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		modelValue: string;
		heading?: string;
		subLabel?: string;
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
	.ui-select__icon-wrapper {
		top: 50%;
		transform: translateY(-50%);
	}
</style>
