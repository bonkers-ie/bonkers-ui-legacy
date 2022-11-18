<template>
	<div
		v-on-click-outside="closeModal"
		class="
				ui-modal
				absolute
				m-auto
				flex flex-col
				items-center
				z-10
				opacity-0
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
			class="mt-md mb-sm"
		>
			<slot name="icon" />
		</div>
		<ui-typography
			v-if="title"
			class="my-md"
			:weight="ETextWeight.BOLD"
			:align="ETextAlign.CENTER"
			:size="ETypographySizes.LG"
		>
			{{ title }}
		</ui-typography>
		<ui-typography
			:weight="ETextWeight.REGULAR"
			:align="ETextAlign.CENTER"
			line-height
			class="text-secondary mb-md"
		>
			<slot />
		</ui-typography>

		<div class="w-full mt-auto">
			<slot name="footer" />
		</div>
	</div>
</template>
<script lang="ts" setup>
	import { vOnClickOutside } from "@vueuse/components";
	import { ETypographySizes } from "../ui-typography/";
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import { EModalSizes } from "./_typings";

	withDefaults(
		defineProps<{
			title: string;
			modalSize?: EModalSizes;
			closeModal: () => void;
		}>(),
		{
			modalSize: EModalSizes.SM,
		}
	);

</script>
