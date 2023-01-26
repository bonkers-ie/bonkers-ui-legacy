<template>
	<label
		class="ui-plain-radio relative mb-md"
	>
		<input
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			class="peer group appearance-none absolute"
			:disabled="disabled"
		>
		<div
			class="
                ui-plain-radio__content
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
		>
			<span class="grid grid-flow-col justify-start gap-sm">
				<ui-radio
					model-value=""
					:name="name"
					:value="value"
					:disabled="disabled"
				/>

				<span class="text-wrapper">
					<ui-typography
						:size="ETypographySizes.SM"
						:kind="EColors.SECONDARY"
						:weight="ETextWeight.SEMI_BOLD"
						line-height
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
			</span>
		</div>
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
