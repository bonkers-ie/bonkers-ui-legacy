<template>
	<div
		v-if="dropdownKind === EDropdownKinds.DEFAULT"
		class="rounded-lg border border-secondary-alt-300 bg-white"
	>
		<div
			class="flex justify-between rounded px-md py-sm font-bold text-black"
			@click="isOpen = !isOpen"
		>
			<ui-typography
				line-height
				:size="
					ETypographySizes.MD"
				:weight="ETextWeight.SEMI_BOLD "
			>
				{{ header }}
			</ui-typography>

			<ui-icon
				:icon-name="iconName"
				:size="ESize.MD"
			/>
		</div>

		<div
			class=" border border-secondary-alt-300 border-x-transparent border-b-transparent bg-white
			transition duration-300 ease-in-out"
			:class="isOpen ? 'grid-rows-[1fr] opacity-100 h-auto ' : 'grid-rows-[0fr] opacity-0 h-0'"
		>
			<div
				class="w-full items-center border border-transparent p-sm"
				:class="isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
			>
				<ui-typography
					line-height
					:size="
						ETypographySizes.SM"
					:weight="ETextWeight.SEMI_BOLD "
				>
					{{ subText }}
				</ui-typography>
			</div>
			<div
				class="w-full items-center border border-transparent p-sm"
				:class="isOpen ? 'grid-rows-[1fr] opacity-100 ' : 'grid-rows-[0fr] opacity-0'"
			>
				<ui-typography
					line-height
					:size="
						ETypographySizes.SM"
					:weight="ETextWeight.SEMI_BOLD "
				>
					{{ subText }}
				</ui-typography>
			</div>
		</div>
	</div>

	<div
		v-else
	>
		<div
			class="
			flex
			justify-between
			rounded-lg
			border
			border-secondary-500
			bg-white
			px-md
			py-sm
			font-bold
			text-black
			"
			@click="isOpen = !isOpen "
		>
			<ui-typography
				line-height
				:size="
					ETypographySizes.MD"
				:weight="ETextWeight.SEMI_BOLD "
			>
				{{ header }}
			</ui-typography>

			<ui-icon
				:class="isOpen ? 'rotate-180' : 'rotate-0'"
				:icon-name="iconName"
				:size="ESize.MD"
			/>
		</div>

		<div
			class=" mt-sm w-full transition-all duration-300 ease-in-out"
			:class="isOpen ? 'grid-rows-[1fr] opacity-100 ' : 'grid-rows-[0fr] opacity-0'"
		>
			<slot>
				<ui-typography
					line-height
					:size="
						ETypographySizes.SM"
					:weight="ETextWeight.REGULAR "
				>
					{{ subText }}
				</ui-typography>
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName, ESize } from "../ui-icon";
	import { ref } from "vue";
	import { EDropdownKinds } from "./_typings";

	const isOpen = ref(false);

	defineProps<{
		header?: string;
		iconName: TIconName;
		subText?: string;
		dropdownKind: EDropdownKinds

	}>();

</script>
