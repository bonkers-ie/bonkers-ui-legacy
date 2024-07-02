<template>
	<div
		class="
			ui-modal
			max-height
			max-width
			inset-0
			z-10
			flex
			w-full
			flex-col
			items-center
			overflow-y-scroll
			rounded-2xl
			bg-white
			p-md
			shadow-md
			"
		:class="[
			modalSize === EModalSizes.SM &&'h-fit max-w-[24rem]',
			modalSize === EModalSizes.MD &&'h-fit max-w-[32rem]',
			modalSize === EModalSizes.LG &&'h-fit max-w-[40rem]',
			modalSize === EModalSizes.RESPONSIVE && 'h-full',
		]"
	>
		<div
			v-if="$slots.icon"
			class="mb-sm mt-md"
		>
			<slot name="icon" />
		</div>

		<slot name="title">
			<ui-typography
				v-if="title"
				class="my-md"
				:weight="ETextWeight.BOLD"
				:align="ETextAlign.CENTER"
				:size="ETypographySizes.LG"
			>
				{{ title }}
			</ui-typography>
		</slot>

		<ui-typography
			is="div"
			v-if="$slots.default"
			:weight="ETextWeight.REGULAR"
			:align="ETextAlign.CENTER"
			line-height
			class="mb-md w-full overflow-y-auto text-secondary"
		>
			<slot />
		</ui-typography>

		<div
			v-if="$slots.footer"
			class="mt-auto w-full"
		>
			<slot name="footer" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ETypographySizes } from "../ui-typography/";
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import { EModalSizes } from "./_typings";

	withDefaults(
		defineProps<{
			title?: string;
			modalSize?: EModalSizes;
		}>(),
		{
			title: undefined,
			modalSize: EModalSizes.SM,
		}
	);

</script>

<style scoped>
	.max-height{
		max-height: calc(100vh - var(--md));
	}

	.max-width{
		max-width: calc(100vw - var(--md));
	}
</style>
