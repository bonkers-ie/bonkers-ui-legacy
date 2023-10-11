<template>
	<div
		v-if="dropdownKind === EDropdownKinds.DEFAULT"
		class="rounded-lg border border-secondary-alt-300 bg-white"
	>
		<div
			class="flex flex-col rounded-lg text-black"
			@click="isOpen = !isOpen"
		>
			<div class="flex flex-row justify-between px-md py-sm ">
				<ui-typography
					line-height
					:size="ETypographySizes.MD"
					:weight="ETextWeight.SEMI_BOLD "
				>
					{{ header }}
				</ui-typography>

				<ui-icon
					class="item-icon"
					:class="isOpen ? 'rotate-180 transform duration-200 opacity-100'
						: 'rotate-0 transform duration-200 opacity-100'"
					:icon-name="iconName"
					:size="ESize.MD"
				/>
			</div>

			<Transition>
				<div
					v-show="isOpen"
					:class="{
						'h-full items-center overflow-hidden border border-transparent border-t-secondary-alt-300 p-sm':
							dropdownKind === EDropdownKinds.DEFAULT,
					}"
				>
					<slot>
						{{ subText }}
					</slot>
				</div>
			</Transition>
		</div>
	</div>

	<div
		v-else-if="dropdownKind === EDropdownKinds.SECONDARY"
	>
		<div
			@click="isOpen = !isOpen"
		>
			<div class=" my-md rounded-lg border border-secondary-500">
				<div class="flex flex-row justify-between px-md  py-sm">
					<ui-typography
						line-height
						:size="ETypographySizes.LG"
						:weight="ETextWeight.SEMI_BOLD "
					>
						{{ header }}
					</ui-typography>

					<ui-icon
						:class="isOpen ? 'rotate-180 transform duration-200 opacity-100'
							: 'rotate-0 transform duration-200 opacity-100'"
						:icon-name="iconName"
						:size="ESize.MD"
					/>
				</div>
			</div>

			<Transition>
				<div
					v-show="isOpen"
					:class="{
						'h-full items-center overflow-hidden':
							dropdownKind === EDropdownKinds.SECONDARY,
					}"
				>
					<slot>
						{{ subText }}
					</slot>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName, ESize } from "../ui-icon";
	import { ref } from "vue";
	import { EDropdownKinds } from "./_typings";

	const isOpen = ref(false);

	withDefaults(defineProps<{
		header?: string;
		iconName: TIconName;
		subText?: string;
		dropdownKind?: EDropdownKinds

	}>(), {
		dropdownKind: EDropdownKinds.DEFAULT
	});

</script>

<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.15s ease-in-out 0.2s, height 0.1s ease;

	}

	.v-enter-from,
	.v-leave-to {
		height: fit-content;
		opacity: 0;
	}

</style>
