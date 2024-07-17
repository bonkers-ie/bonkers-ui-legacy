<template>
	<div
		class="flex-none overflow-hidden rounded-2xl border border-secondary-alt-300"
	>
		<div class="h-[100px] w-full bg-warning-400 object-cover" />
		<div class="relative grid gap-xxxs px-xs py-sm text-secondary-400">
			<div
				v-if="icon"
				class="
					absolute
					-top-lg
					left-xs
					flex
					size-fit
					rounded-full
					border-2
					border-white
					bg-primary
					p-xxs
					"
			>
				<ui-icon
					:icon-name="icon"
					class="text-white"
					:size="ESize.MD"
				/>
			</div>
			<ui-typography
				:size="ETypographySizes.SM"
				:weight="ETextWeight.SEMI_BOLD"
				line-height
			>
				{{ title }}
			</ui-typography>

			<ui-typography
				:size="ETypographySizes.XXS"
				line-height
			>
				{{ description }}
			</ui-typography>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";

	defineProps<{
		icon?: TIconName
		title?: string;
		description?: string;

	}>();

</script>
