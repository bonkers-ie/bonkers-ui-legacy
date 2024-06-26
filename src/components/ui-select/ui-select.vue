<template>
	<div class="ui-select">
		<slot name="heading">
			<ui-typography
				v-if="heading"
				class="mb-xxs"
				:size="ETypographySizes.MD"
			>
				{{ heading }}
			</ui-typography>
		</slot>
		<div
			class="relative rounded-xl border border-secondary-alt-500 bg-white hover:border-secondary-alt-700"
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
				<slot name="postfix-icon">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z"
							fill="currentColor"
						/>
					</svg>
				</slot>
			</div>
		</div>
		<slot name="subLabel">
			<ui-typography
				v-if="subLabel"
				:size="ETypographySizes.SM"
				:kind="EColors.SECONDARY_ALT"
				class="mt-xxs"
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
