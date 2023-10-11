<template>
	<div
		class="rounded-lg bg-white"
	>
		<div
			class="flex flex-col rounded-lg border px-md py-sm text-black"
			:class="{
				' border-secondary-alt-300': dropdownKind === EDropdownKinds.DEFAULT,
				' border-error': dropdownKind === EDropdownKinds.SECONDARY
			}"
			@click="isOpen = !isOpen"
		>
			<div class="flex flex-row justify-between">
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
					class="overflow-hidden"
					:class="{
						' items-center border border-transparent ':
							dropdownKind === EDropdownKinds.DEFAULT
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
		transition: all 0.5s ease-in-out;
	}

	.v-enter-to,
	.v-leave-from {
		height: auto;
		opacity: 1;
	}

	.v-enter-from,
	.v-leave-to {
		height: 0;
		opacity: 0;
	}

</style>
