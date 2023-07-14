<template>
	<div class="ui-input">
		<slot name="header">
			<ui-typography
				v-if="heading"
				class="mb-xs"
				:size="ETypographySizes.MD"
			>
				{{ heading }}
			</ui-typography>
		</slot>
		<label
			class="ui-input__wrapper flex w-full items-center gap-xs rounded-lg border bg-white p-sm"
			:class="[
				kind === EInputKinds.SECONDARY && 'border-secondary-alt-500 hover:border-secondary-alt-700',
				kind === EInputKinds.PRIMARY && 'border-primary',
				kind === EInputKinds.ERROR && 'border-error',

				disabled && 'border-secondary-alt-300 bg-secondary-alt-200',
			]"
		>
			<slot name="prefix-icon" />

			<input
				:autocomplete="getAutoComplete()"
				:value="modelValue"
				:pattern="pattern"
				class="w-full border-0 bg-transparent outline-none placeholder:italic placeholder:text-secondary-alt"
				:type="type"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:minlength="minlength"
				@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
				@focus="focusHandler || (()=>undefined)"
			>

			<slot name="postfix-icon" />
		</label>

		<slot name="subLabel">
			<ui-typography
				v-if="subLabel"
				line-height
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
	import { EInputKinds, EInputType } from "./_typings";
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
		autocomplete?: string;
	}>(), {
		modelValue: "",
		placeholder: "",
		autocomplete: "",
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

	const getAutoComplete =()=> {
		if(props.autocomplete !== "") return props.autocomplete;
		switch(props.type) {
			case EInputType.PASSWORD: return "current-password";
			case EInputType.EMAIL: return "email";
			default: return "off";
		}
	};

</script>
