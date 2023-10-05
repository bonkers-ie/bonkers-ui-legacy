<template>
	<div class=" rounded-lg border border-secondary-alt-300">
		<div
			class="flex justify-between rounded bg-white px-md py-sm font-bold text-black"
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
			class="w-full items-center border border-secondary-alt-300 p-sm"
			:class="isOpen ? 'inline-block' : 'hidden'"
		>
			<slot>
				<ui-typography
					line-height
					:size="
						ETypographySizes.SM"
					:weight="ETextWeight.SEMI_BOLD "
				>
					{{ subText }}
				</ui-typography>
			</slot>
		</div>
		<div
			class="w-full items-center border border-secondary-alt-300 p-sm"
			:class="isOpen ? 'inline-block' : 'hidden'"
		>
			<slot>
				<ui-typography
					line-height
					:size="
						ETypographySizes.SM"
					:weight="ETextWeight.SEMI_BOLD "
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

	const isOpen = ref(false);
	defineProps<{
		header?: string;
		iconName: TIconName;
		subText?: string;

	}>();

</script>
