<template>
	<label
		class="ui-plain-radio grid border p-sm rounded-lg"
		:class="[
			slots.default && 'items-center gap-xs justify-start',
			isActive ? 'border-primary':'border-secondary-alt',

		]"
	>
		<input
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			:disabled="disabled"
			class="appearance-none absolute"


		>
		<span
			class="ui-plain-radio_custom block w-md h-md border border-secondary-alt rounded-full relative hover:border-secondary-alt-700 focus:border-secondary-alt-700"

		>
			<span class="ui-plain-radio__dot absolute top-2/4 left-2/4 w-xs h-xs block bg-primary rounded-full" />
		</span>
		<slot />
	</label>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";

	const slots = useSlots();
	const props = defineProps<{
		modelValue: string;
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

	const isActive = computed(()=>props.modelValue === props.value);
</script>

<style>
	.ui-plain-radio {
		grid-template-columns: auto auto;
	}

	.ui-plain-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(0);
		transition: transform 0.2s ease-in-out;
	}

	input:disabled + .ui-plain-radio_custom {
		border: 1px solid var(--color-secondary-alt-400);
		background-color: var(--color-secondary-alt-200);
	}

	input:checked + .ui-plain-radio_custom {
		border: 2px solid var(--color-primary);
	}

	input:checked + .ui-plain-radio_custom .ui-plain-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(1);
	}

	input:checked + .ui-plain-radio_custom:hover {
		border: 2px solid var(--color-primary-600);
	}

	input:checked + .ui-plain-radio_custom:hover .ui-plain-radio__dot {
		background-color: var(--color-primary-600);
	}

	input:checked:disabled + .ui-plain-radio_custom {
		border: 2px solid var(--color-primary-300);
		background-color: var(--color-white);
	}

	input:checked:disabled + .ui-plain-radio_custom .ui-plain-radio__dot {
		background-color: var(--color-primary-300);
	}
</style>
