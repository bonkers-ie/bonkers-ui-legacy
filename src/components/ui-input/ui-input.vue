<template>
	<div class="ui-input">
		<ui-typography
			v-if="heading"
			:weight="ETextWeight.BOLD"
			class="mb-sm"
		>
			{{ heading }}
		</ui-typography>
		<label
			class="ui-input__wrapper flex w-full rounded-lg border bg-white items-center p-sm gap-xs"
			:class="[
				!kind && 'border-secondary-alt-500 hover:border-secondary-alt-700',
				kind === EInputKinds.PRIMARY && 'border-primary',
				kind === EInputKinds.ERROR && 'border-error',

				disabled && 'border-secondary-alt-300 bg-secondary-alt-200',
			]"
		>
			<slot name="prefix-icon" />

			<input
				v-model="inputModel"
				class="bg-transparent border-0 outline-none w-full placeholder:text-secondary-alt placeholder:italic"
				:type="type || 'text'"
				:placeholder="placeholder"
				:pattern="pattern"
				:maxlength="maxlength"
				:minlength="minlength"
			>

			<slot name="postfix-icon" />
		</label>
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
	import { EInputKinds, EInputType } from "./_typings";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		placeholder?: string;
		modelValue: string;
		disabled?: boolean;
		kind?: EInputKinds;
		heading?: string;
		subLabel?: string;
		type?: EInputType;
		pattern?: string;
		maxlength?: string;
		minlength?: string;
	}>();

	const emit = defineEmits(["update:modelValue"]);

	const inputModel = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	});

</script>
