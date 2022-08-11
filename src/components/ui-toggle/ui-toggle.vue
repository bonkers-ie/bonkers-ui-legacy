<template>
	<label
		class="ui-toggle rounded-full cursor-pointer"
		:class="className"
	>
		<span class="ui-input__input-wrapper block w-lg h-md relative">
			<input
				type="checkbox"
				class="appearance-none absolute w-0 h-0 border-0"
				:checked="modelValue"
				@input="$emit('update:modelValue', !!($event.target as HTMLInputElement)?.value)"
			>

			<span class="ui-toggle__bg-block bg-secondary-alt block w-full h-full rounded-full" />
			<span class="ui-toggle__dot block bg-white absolute top-0 rounded-full">
				<svg
					class="ui-toggle__check-icon text-primary absolute"
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
		</span>
	</label>
</template>

<script lang="ts" setup>
	defineProps<{
		className?: string;
		modelValue: boolean;
	}>();

	defineEmits<{
		(e: "update:modelValue", state: boolean): void
	}>();
</script>

<style scoped>
	.ui-toggle__dot {
		top: 50%;
		width: 22px;
		height: 22px;
		transform: translate3d(1px, -50%, 0);
		transition: transform 0.2s ease-in-out;
	}

	.ui-toggle__check-icon {
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		stroke-dasharray: 70;
		stroke-dashoffset: 70;
		transition: stroke-dashoffset 0.2s ease-in-out;
	}

	.ui-toggle:hover .ui-toggle__dot,
	.ui-toggle:active .ui-toggle__dot,
	.ui-toggle:focus .ui-toggle__dot {
		box-shadow: var(--shadow-border-secondary);
	}

	.ui-toggle input:checked ~ .ui-toggle__dot {
		transform: translate3d(calc(var(--lg) - 100% - 1px), -50%, 0);
	}

	.ui-toggle:hover input:checked ~ .ui-toggle__dot,
	.ui-toggle:active input:checked ~ .ui-toggle__dot,
	.ui-toggle:focus input:checked ~ .ui-toggle__dot {
		box-shadow: var(--shadow-border-primary);
	}

	.ui-toggle__bg-block {
		transition: background-color 0.2s ease-in-out;
	}

	.ui-toggle input:checked ~ .ui-toggle__bg-block {
		background-color: var(--color-primary);
	}

	.ui-toggle input:checked ~ .ui-toggle__dot .ui-toggle__check-icon {
		stroke-dashoffset: 0;
	}
</style>
