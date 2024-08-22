<template>
	<label
		class="ui-checkbox grid cursor-pointer"
		:class="[
			slots.default && 'items-center gap-sm',
			justify === EJustify.START && 'justify-start',
			justify === EJustify.END && 'justify-end',
			justify === EJustify.AROUND && 'justify-around',
			justify === EJustify.BETWEEN && 'justify-between',
			justify === EJustify.EVENLY && 'justify-evenly',
			justify === EJustify.CENTER && 'justify-center',
			disabled && 'ui-checkbox_disabled',
		]"
	>
		<input
			v-model="checkboxModel"
			class="absolute appearance-none"
			type="checkbox"
			:value="value"
			:disabled="disabled"
		>
		<span
			class="
				ui-checkbox_custom
				relative
				flex
				items-center
				justify-center
				rounded
				border
				border-secondary-alt-500
				hover:border-secondary-alt-700
				"
			:class="{
				'order-last': invertOrder,
				'size-sm': size === ECheckboxSize.SM,
				'size-md': size === ECheckboxSize.MD
			}"
		>
			<svg
				class="ui-checkbox__icon text-white"
				:class="{
					'size-sm': size === ECheckboxSize.MD,
					'size-xs': size === ECheckboxSize.SM,
				}"
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
	import { useSlots, computed } from "vue";
	import { EJustify } from "../../_types/align";
	import { ECheckboxSizes as ECheckboxSize } from "./_types";

	const slots = useSlots();

	const props = withDefaults(defineProps<{
		modelValue: boolean | unknown[];
		justify?: EJustify;
		invertOrder?: boolean;
		disabled?: boolean;
		value?: string;
		size?: ECheckboxSize;
	}>(), {
		size: ECheckboxSize.MD,
		disabled: false,
		justify: EJustify.START,
		invertOrder: false,
	});

	const emit = defineEmits(["update:modelValue"]);

	const checkboxModel = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	});

</script>

<style scoped>
	.ui-checkbox {
		grid-template-columns: auto auto;
	}

	.ui-checkbox_custom {
		transition: background-color ease-in-out 0.3s 0.3s, border-width ease-in-out 0.2s;
	}

	.ui-checkbox__icon {
		stroke-dasharray: 70;
		stroke-dashoffset: 70;
		transition: stroke-dashoffset 0.3s ease-in-out;
	}

	input+.ui-checkbox_custom:active {
		transition: background-color ease-in-out 0.1s;
		background-color: var(--color-secondary-alt-200);
	}

	input+.ui-checkbox_custom:active,
	input:focus+.ui-checkbox_custom {
		box-shadow: var(--shadow-selected-disabled);
	}

	input:disabled+.ui-checkbox_custom {
		background-color: var(--color-secondary-alt-200);
		border-color: var(--color-secondary-alt-400);
	}

	input:checked+.ui-checkbox_custom .ui-checkbox__icon {
		stroke-dashoffset: 0;
	}

	input:checked+.ui-checkbox_custom>svg {
		opacity: 1;
	}

	input:checked+.ui-checkbox_custom {
		border-width: 0;
		background-color: var(--color-primary);
		transition: background-color ease-in-out 0.1s, border-width ease-in-out 0.1s, box-shadow ease-in-out 0.2s;
		animation: cb-pop 0.5s ease-in-out;
	}

	input:checked+.ui-checkbox_custom:hover {
		background-color: var(--color-primary-600);
	}

	input:checked+.ui-checkbox_custom:active {
		background-color: var(--color-primary-700);
	}

	input:checked:disabled+.ui-checkbox_custom {
		background-color: var(--color-primary-300);
		border: 1px solid var(--color-primary-400);
	}

	.ui-checkbox_disabled {
		pointer-events: none;
		cursor: default;
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
