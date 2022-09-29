<template>
	<label
		class="ui-radio grid cursor-pointer"
		:class="[
			slots.default && 'items-center gap-xs',
			(!justify || justify === EJustify.START) && 'justify-start',
			justify === EJustify.END && 'justify-end',
			justify === EJustify.AROUND && 'justify-around',
			justify === EJustify.BETWEEN && 'justify-between',
			justify === EJustify.EVENLY && 'justify-evenly',
			justify === EJustify.CENTER && 'justify-center',
			disabled && 'pointer-events-none',
		]"
	>
		<input
			:id="value"
			v-model="radioModel"
			type="radio"
			:name="name"
			:value="value"
			:disabled="disabled"
			class="appearance-none absolute"
		>
		<span
			class="ui-radio_custom block w-md h-md border border-secondary-alt rounded-full relative hover:border-secondary-alt-700 focus:border-secondary-alt-700"
			:class="invertOrder && 'order-last'"
		>
			<span class="ui-radio__dot absolute top-2/4 left-2/4 w-xs h-xs block bg-primary rounded-full" />
		</span>
		<slot />
	</label>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";
	import { EJustify } from "../../_types/align";
	const slots = useSlots();
	const props = defineProps<{
		modelValue: string;
		name: string;
		value: string;
		justify?: EJustify;
		invertOrder?: boolean;
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

<style>
	.ui-radio {
		grid-template-columns: auto auto;
	}

	.ui-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(0);
		transition: transform 0.2s ease-in-out;
	}

	input:disabled + .ui-radio_custom {
		border: 1px solid var(--color-secondary-alt-400);
		background-color: var(--color-secondary-alt-200);
	}

	input:focus + .ui-radio_custom {
		box-shadow: var(--shadow-border-primary);
	}

	input:checked + .ui-radio_custom {
		border: 2px solid var(--color-primary);
	}

	input:checked + .ui-radio_custom .ui-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(1);
	}

	input:checked + .ui-radio_custom:hover {
		border: 2px solid var(--color-primary-600);
	}

	input:checked + .ui-radio_custom:hover .ui-radio__dot {
		background-color: var(--color-primary-600);
	}

	input:checked:disabled + .ui-radio_custom {
		border: 2px solid var(--color-primary-300);
		background-color: var(--color-white);
	}

	input:checked:disabled + .ui-radio_custom .ui-radio__dot {
		background-color: var(--color-primary-300);
	}
</style>
