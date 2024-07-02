<template>
	<div
		class="ui-input"
		:class="[
			disabled && 'pointer-events-none'
		]"
	>
		<slot name="header">
			<ui-typography
				v-if="heading"
				class="mb-xxs"
				:size="ETypographySizes.MD"
				line-height
			>
				{{ heading }}
			</ui-typography>
		</slot>
		<label
			class="
				ui-input__wrapper
				flex
				w-full
				items-center
				gap-xxs
				rounded-xl
				border
				bg-white
				p-sm
				"
			:class="[
				kind === EInputKinds.SECONDARY && 'border-secondary-alt-500 hover:border-secondary-alt-700',
				kind === EInputKinds.PRIMARY && 'border-primary',
				kind === EInputKinds.ERROR && 'border-error',

				disabled && 'border-secondary-alt-300 bg-secondary-alt-200',
			]"
		>
			<slot name="prefix-icon" />

			<input
				:autocomplete="autocomplete || getAutoComplete"
				:name="name || autocomplete || getAutoComplete"
				:value="modelValue"
				:pattern="pattern"
				class="
					w-full
					border-0
					bg-transparent
					outline-none
					placeholder:italic
					placeholder:text-secondary-alt
					"
				:type="type"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:minlength="minlength"
				@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
				@focus="focusHandler || undefined"
			>

			<slot name="postfix-icon" />
		</label>

		<slot name="subLabel">
			<ui-typography
				v-if="subLabel"
				line-height
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
	import { EAutocomplete, EInputKinds, EInputType } from "./_typings";
	import UiTypography, { ETypographySizes, EColors } from "../ui-typography";

	const props = withDefaults(defineProps<{
		placeholder?: string;
		modelValue: string | number;
		disabled?: boolean;
		kind?: EInputKinds;
		heading?: string;
		subLabel?: string;
		type?: EInputType;
		pattern?: string;
		maxlength?: string;
		minlength?: string;
		focusHandler?: (e:FocusEvent) => void;
		autocomplete?: EAutocomplete;
		name?: string;
	}>(), {
		modelValue: "",
		placeholder: "",
		disabled: false,
		autocomplete: undefined,
		name: undefined,
		heading: undefined,
		subLabel: undefined,
		pattern: undefined,
		maxlength: undefined,
		minlength: undefined,
		type: EInputType.TEXT,
		focusHandler: ()=>undefined,
		kind: EInputKinds.SECONDARY
	});

	defineEmits(["update:modelValue"]);

	const getAutoComplete = computed(()=> {
		switch (props.type) {
			case EInputType.PASSWORD: return EAutocomplete.CURRENT_PASSWORD;
			case EInputType.EMAIL: return EAutocomplete.EMAIL;
			default: return undefined;
		}
	});
</script>
