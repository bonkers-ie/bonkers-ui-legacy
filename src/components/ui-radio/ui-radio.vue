<template>
	<label
		class="ui-radio group grid cursor-pointer grid-flow-col"
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
			:name="name.toString()"
			:value="value"
			:disabled="disabled"
			class="peer absolute appearance-none"
		>
		<span
			class="
				ui-radio_custom
				relative
				block
				h-md
				w-md
				rounded-full
				border
				border-secondary-alt
				bg-white
				group-hover:border-secondary-alt-700
				group-focus:border-secondary-alt-700
				peer-checked:border-2
				peer-checked:border-primary
				peer-checked:hover:border-primary-600
				peer-focus:shadow-border-primary
				peer-disabled:border-secondary-alt-400
				peer-disabled:bg-secondary-alt-200"
			:class="invertOrder && 'order-last'"
		>
			<span
				class="
						ui-radio__dot
						absolute
						left-2/4
						top-2/4
						block
						h-xs
						w-xs
						rounded-full
						bg-primary"
			/>
		</span>
		<slot />
	</label>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";
	import { EJustify } from "../../_types/align";
	const slots = useSlots();
	const props = defineProps<{
		modelValue: string | number | boolean;
		name: string | number | boolean;
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
	.ui-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(0);
		transition: transform 0.2s ease-in-out;
	}

	input:checked + .ui-radio_custom .ui-radio__dot {
		transform: translate3d(-50%, -50%, 0) scale(1);
	}

	input:checked + .ui-radio_custom:hover .ui-radio__dot {
		background-color: var(--color-primary-600);
	}

	input:checked:disabled + .ui-radio_custom {
		border: 2px solid var(--color-primary-300);
	}

	input:checked:disabled + .ui-radio_custom .ui-radio__dot {
		background-color: var(--color-primary-300);
	}
</style>
