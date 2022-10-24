<template>
	<transition
		name="ui-modal"
		mode="out-in"
	>
		<div
			v-if="modalVisible"
			:class="[
				'ui-modal absolute grid grid-rows-6 grid-flow-col gap-4 place-items-center rounded-3xl shadow-md py-md px-sm bg-white',
				modalSize === ESize.XXS && 'h-[12rem] w-[12rem]',
				modalSize === ESize.XS && 'h-[18rem] w-[18rem]',
				modalSize === ESize.SM && 'h-[24rem] w-[24rem]',
				modalSize === ESize.MD && 'h-[24rem] w-[36rem]',
				modalSize === ESize.LG && 'h-[24rem] w-[48rem]',
				modalSize === ESize.XL && 'h-[24rem] w-[60rem]',
				modalSize === ESize.XXL && 'h-[24rem] w-[72rem]',
			]"
		>
			<ui-icon
				:icon-name="icon"
				:size="iconSize"
				:class="[
					'row-start-1 row-span-2',
					(!kind || kind === EModalTypes.PRIMARY) &&'text-primary',
					kind === EModalTypes.WARNING && 'text-warning',
					kind === EModalTypes.ERROR && 'text-error',
					kind === EModalTypes.SECONDARY && 'text-secondary',
				]"
			/>
			<ui-typography
				v-if="slots.title"
				:weight="ETextWeight.BOLD"
				:align="ETextAlign.CENTER"
			>
				<slot name="title" />
			</ui-typography>
			<ui-typography
				v-if="slots.description"
				:weight="ETextWeight.REGULAR"
				:align="ETextAlign.CENTER"
			>
				<slot name="description" />
			</ui-typography>
			<div class="grid grid-cols-7 gap-sm grid-flow-row row-start-6 w-full">
				<ui-button
					v-if="secondaryBtn"
					:kind="secondaryBtn"
					:class="[
						(modalSize === ESize.XS || modalSize === ESize.SM || modalSize === ESize.MD) && 'col-end-5 col-span-1 px-lg',
						(modalSize === ESize.LG || modalSize === ESize.XL || modalSize === ESize.XXL) && 'col-end-6'
					]"
					@click="onSecondaryClick"
				>
					Cancel
				</ui-button>
				<ui-button
					:full-width="!secondaryBtn"
					:class="[(secondaryBtn && modalSize === ESize.LG || modalSize === ESize.XL|| modalSize === ESize.XXL) ? 'col-end-8 col-span-2' : 'col-end-8 col-span-2'
					]"
					@click="onPrimaryClick"
				>
					OK
				</ui-button>
			</div>
		</div>
	</transition>
	<transition
		name="ui-backdrop"
		mode="out-in"
	>
		<div
			v-if="modalVisible"
			class="ui-modal-backdrop absolute overflow-y-auto h-full w-full bg-black opacity-60"
		/>
	</transition>
</template>
<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiButton, { EButtonTypes } from "../ui-button";
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import { ESize } from "../../_types/sizing";
	import { EModalTypes } from "./_types";
	import { useSlots } from "vue";

	const slots = useSlots();

	defineProps<{
		modalVisible: boolean
		secondaryBtn?: {
			type: EButtonTypes,
			default: EButtonTypes.SECONDARY_OVERLAY
		},
		icon: TIconName
		iconSize: ESize
		modalSize?: ESize
		kind?: {
			type: EModalTypes,
			default: EModalTypes.PRIMARY
		},
	}>();

	const emit = defineEmits<{
		(e: "modal-secondary-click", state: boolean): void
		(e: "modal-primary-click", state: boolean): void
	}>();

	const onSecondaryClick = () =>{
		emit("modal-secondary-click", false);
	};
	const onPrimaryClick = () => {
		emit("modal-primary-click", false);
	};
</script>
<style lang="pcss" scoped>
.ui-modal{
	z-index: 9999;
	transform: none;
	opacity: 1;
	top:0;
	right:0;
	bottom:0;
	left: 0;
	margin: auto;
}
.ui-modal-backdrop{
	display: flex;
	z-index: 9998;
}
	.ui-backdrop-enter-active,
.ui-backdrop-leave-active {
  transition: opacity .15s linear;
}

.ui-backdrop-enter-from,
.ui-backdrop-leave-to {
  opacity: 0;
}

.ui-backdrop-leave-to{
	transition-delay: 0.1s;
}

.ui-modal-enter-active,
.ui-modal-leave-active {
  transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.2s linear;
  transition-delay: 0.1s;
}

.ui-modal-enter-from,
.ui-modal-leave-to {
  opacity: 0;
  transform: translateY(20%);
}
</style>
