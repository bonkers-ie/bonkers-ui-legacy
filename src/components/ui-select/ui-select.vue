<template>
	<div class="ui-select">
		<slot name="heading">
			<ui-typography
				v-if="heading"
				class="mb-xs"
				:size="ETypographySizes.MD"
			>
				{{ heading }}
			</ui-typography>
		</slot>
		<div
			class="relative rounded-lg border border-secondary-alt-500 bg-white hover:border-secondary-alt-700"
			:class="[disabled && 'pointer-events-none border-secondary-alt-300 bg-secondary-alt-200']"
		>
			<select
				v-model="radioModel"
				class="
					m-0
					w-full
					cursor-pointer
					appearance-none
					border-0
					bg-transparent
					p-sm
					italic
					text-secondary-alt
					outline-0
				"
			>
				<slot />
			</select>

			<div class="absolute right-sm top-1/2 -translate-y-1/2">
				<slot name="postfix-icon" />
			</div>
		</div>
		<slot name="subLabel">
			<ui-typography
				v-if="subLabel"
				:size="ETypographySizes.SM"
				:kind="EColors.SECONDARY_ALT"
				class="mt-xs"
			>
				{{ subLabel }}
			</ui-typography>
		</slot>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiTypography, { ETypographySizes, EColors } from "../ui-typography";

	const props = defineProps<{
		modelValue: string | number;
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
