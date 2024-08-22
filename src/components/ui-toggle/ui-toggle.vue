<template>
	<div
		class="ui-toggle"
	>
		<slot name="header">
			<ui-typography
				v-if="header || $slots.header"
				line-height
				class="mb-sm"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ header }}
			</ui-typography>
		</slot>

		<label
			class="flex cursor-pointer gap-sm rounded-full"
			:class="[
				disabled && 'ui-toggle_disabled pointer-events-none',
				invertOrder && 'flex-row-reverse',
				alignCenter && 'items-center'
			]"
		>
			<span
				class="ui-input__input-wrapper relative block h-md"
			>
				<input
					v-model="checkboxModel"
					type="checkbox"
					class="absolute size-0 appearance-none border-0"
					:value="value"
				>

				<span class="ui-toggle__bg-block block h-md w-xl rounded-full bg-secondary-alt" />

				<span class="ui-toggle__dot absolute top-0 block rounded-full bg-white" />
			</span>

			<slot name="title">
				<ui-typography
					v-if="title || $slots.title"
					:size="ETypographySizes.MD"
					class="w-full"
					line-height
				>
					{{ title }}
				</ui-typography>
			</slot>
		</label>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import { computed } from "vue";

	const props = defineProps<{
		header?: string;
		title?: string;
		modelValue: boolean | unknown[];
		disabled?: boolean;
		invertOrder?: boolean;
		alignCenter?: boolean;
		value?: string;
	}>();

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
	.ui-toggle__dot {
		top: 50%;
		width: 22px;
		height: 22px;
		transform: translate3d(1px, -50%, 0);
		transition: transform 0.2s ease-in-out;
	}

	.ui-toggle:hover .ui-toggle__dot,
	.ui-toggle:active .ui-toggle__dot,
	.ui-toggle:focus .ui-toggle__dot {
		box-shadow: var(--shadow-border-secondary);
	}

	.ui-toggle input:checked ~ .ui-toggle__dot {
		transform: translate3d(calc(var(--xl) - 100% - 1px), -50%, 0);
	}

	.ui-toggle:hover input:checked ~ .ui-toggle__dot,
	.ui-toggle:active input:checked ~ .ui-toggle__dot,
	.ui-toggle:focus input:checked ~ .ui-toggle__dot {
		box-shadow: var(--shadow-border-primary);
	}

	.ui-toggle__bg-block {
		transition: background-color 0.2s ease-in-out;
	}

	.ui-toggle_disabled .ui-toggle__bg-block {
		background-color: var(--color-secondary-alt-300);
	}

	.ui-toggle input:checked ~ .ui-toggle__bg-block {
		background-color: var(--color-primary);
	}

	.ui-toggle_disabled input:checked ~ .ui-toggle__bg-block {
		background-color: var(--color-primary-300);
	}
</style>
