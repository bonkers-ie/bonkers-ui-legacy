<template>
	<label
		class="ui-checkbox grid"
		:class="[
			slots.default && 'items-center gap-xs',
			(!justify || justify === ECheckboxJustify.START) && 'justify-start',
			justify === ECheckboxJustify.END && 'justify-end',
			justify === ECheckboxJustify.AROUND && 'justify-around',
			justify === ECheckboxJustify.BETWEEN && 'justify-between',
			justify === ECheckboxJustify.EVENLY && 'justify-evenly',
			justify === ECheckboxJustify.CENTER && 'justify-center',
			classes
		]"
	>
		<input
			:checked="modelValue"
			class="appearance-none absolute"
			type="checkbox"
			@input="$emit('update:modelValue', $event.target.checked)"
		>
		<span
			class="ui-checkbox_custom w-md h-md flex items-center justify-center border border-secondary-alt-600 rounded relative"
			:class="invertOrder && 'order-last'"
		>
			<svg
				class="ui-checkbox__icon text-white"
				width="16"
				height="12"
				viewBox="0 0 16 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 4.40106L6.60071 10.1135L15.1694 1.71245"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/>
			</svg>

		</span>
		<span
			v-if="slots.default"
			class="ui-checkbox__slot-wrapper"
		>
			<slot />
		</span>
	</label>
</template>

<script lang="ts" setup>
	import { useSlots } from "vue";
	import { ECheckboxJustify } from "../../_types/align";

	const slots = useSlots();

	defineProps<{
		modelValue: boolean;
		classes?: string;
		justify?: ECheckboxJustify;
		invertOrder?: boolean;
	}>();

	defineEmits(["update:modelValue"]);
</script>

<style scoped>
	.ui-checkbox {
		grid-template-columns: auto auto;
	}

	.ui-checkbox_custom {
		transition: background-color ease-in-out 1s 0.2s, border-width ease-in-out 0.6s;
	}

	.ui-checkbox__icon {
		stroke-dasharray: 70;
		stroke-dashoffset: 70;
		transition: stroke-dashoffset 0.4s linear 0.05s;
	}

	input:checked + .ui-checkbox_custom .ui-checkbox__icon {
		stroke-dashoffset: 0;
	}

	input:checked + .ui-checkbox_custom > svg {
		opacity: 1;
	}

	input:checked + .ui-checkbox_custom {
		border-width: 0;
		background-color: var(--color-primary);
		transition: background-color ease-in-out 0.1s, border-width ease-in-out 0.1s;
		animation: cb-pop 0.5s ease-in-out;
	}

	@keyframes cb-pop {
		0% {
			transform: scale(1);
		}

		33% {
			transform: scale(0.95);
		}

		66% {
			transform: scale(1.05);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
