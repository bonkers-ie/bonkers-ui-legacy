<template>
	<div
		v-on-click-outside="closeModal"
		class="ui-modal"
	>
		<transition
			name="ui-modal"
			mode="out-in"
			enter-active-class="transition delay-100"
			enter-from-class="opacity-0 translate-y-1/4"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition"
			leave-to-class="opacity-0 translate-y-1/4"
			leave-from-class="opacity-100 translate-y-0"
		>
			<div
				v-if="modalVisible"
				:class="[
					'absolute grid grid-rows-8 gap-4 z-10 opacity-0 inset-0 place-items-center rounded-3xl shadow-md p-md bg-white ',
					modalSize === ESize.SM ? 'h-[24rem] w-[24rem] m-auto' : 'h-full w-full m-md'

				]"
			>
				<div
					:class="[
						(!kind || kind === EModalTypes.PRIMARY) && 'text-primary',
						kind === EModalTypes.WARNING && 'text-warning',
						kind === EModalTypes.ERROR && 'text-error',
						kind === EModalTypes.SECONDARY && 'text-secondary',
					]"
					class="row-start-1 row-span-3"
				>
					<slot
						name="icon"
					/>
				</div>
				<ui-typography
					v-if="title"
					class="row-start-4 row-span-1"
					:weight="ETextWeight.BOLD"
					:align="ETextAlign.CENTER"
					:size="ETypographySizes.LG"
				>
					{{ title }}
				</ui-typography>
				<ui-typography
					v-if="$slots.body"
					:weight="ETextWeight.REGULAR"
					:align="ETextAlign.CENTER"
					line-height
					class="row-start-5 row-span-2 text-secondary overflow-scroll"
				>
					<slot name="body" />
				</ui-typography>
				<div class="w-full row-start-7 row-span-1 self-end">
					<slot name="footer" />
				</div>
			</div>
		</transition>
	</div>
	<ui-backdrop :visible="modalVisible" />
</template>
<script lang="ts" setup>
	import { vOnClickOutside } from "@vueuse/components";
	import { ETypographySizes } from "../ui-typography/";
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import uiBackdrop from "../ui-backdrop";
	import { ESize } from "../../_types/sizing";
	import { EModalTypes } from "./_types";

	withDefaults(
		defineProps<{
			title: string,
			modalVisible: boolean,
			modalSize?: ESize,
			kind?:EModalTypes,
			closeModal: () => void
		}>(), {
			modalSize: ESize.SM,
			kind: EModalTypes.PRIMARY
		});
</script>
