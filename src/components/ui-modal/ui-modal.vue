<template>
	<div
		class="
				ui-modal
				flex flex-col
				items-center
				w-full
				z-10
				inset-0
				rounded-2xl
				shadow-md
				p-md
				bg-white
				overflow-y-scroll
			"
		:class="[
			modalSize === EModalSizes.SM &&'h-fit max-h-[24rem] max-w-[24rem]',
			modalSize === EModalSizes.MD &&'h-fit max-h-[32rem] max-w-[32rem]',
			modalSize === EModalSizes.LG &&'h-fit max-h-[40rem] max-w-[40rem]',
			modalSize === EModalSizes.RESPONSIVE && 'h-5/6 w-11/12',
		]"
	>
		<div
			v-if="$slots.icon"
			class="mt-md mb-sm"
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
			class="w-full text-secondary mb-md overflow-y-auto"
		>
			<slot />
		</ui-typography>

		<div
			v-if="$slots.footer"
			class="w-full mt-auto"
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
