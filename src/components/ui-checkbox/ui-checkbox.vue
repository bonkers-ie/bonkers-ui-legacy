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
			<span class="ui-checkbox__icon w-full h-full absolute">
				<span class="ui-checkbox__leg ui-checkbox__leg_first block absolute" />
				<span class="ui-checkbox__leg ui-checkbox__leg_second block absolute" />
			</span>
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

		--delay-time: 1s;
		--transition-func: transform 1s ease-in-out;
	}

	.ui-checkbox_custom {
		transition: background-color ease-in-out 1.2s, border-width ease-in-out 0.3s;
	}

	input:checked + .ui-checkbox_custom > svg {
		opacity: 1;
	}

	input:checked + .ui-checkbox_custom {
		border-width: 0;
		background-color: var(--color-primary);
		transition: background-color ease-in-out 1.2s, border-width ease-in-out 0.3s;
		animation: cb-pop 0.5s ease-in-out;
	}

	.ui-checkbox__leg_first {
		height: 8px;
		border-radius: 1px 1px 0 0;
		transform: scale(1, 0);
		transition-delay: var(--delay-time);
	}

	.ui-checkbox__leg_second {
		top: 8px;
		height: 14px;
		transform-origin: top left;
		transform: rotate(270deg) scale(1, 0);
		border-radius: 0 0 1px 1px;
		transition-delay: 0s;
	}

	input:checked + .ui-checkbox_custom .ui-checkbox__leg_first {
		transform: scale(1, 1);
		transition-delay: 0s;
	}

	input:checked + .ui-checkbox_custom .ui-checkbox__leg_second {
		transform: rotate(270deg) scale(1, 1);
		transition-delay: var(--delay-time);
	}

	.ui-checkbox__icon {
		left: 88%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0) rotate(318deg);
	}

	.ui-checkbox__leg {
		transform-origin: top left;
		background-color: var(--color-white);
		width: 1.6px;
		transition: var(--transition-func);
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
