<template>
	<div
		class="flex-none overflow-hidden rounded-2xl border border-secondary-alt-500 bg-white"
	>
		<img
			v-if="image"
			class="h-[100px] w-full object-cover"
			:src="image"
			alt="Information"
		>

		<div class="relative grid gap-xxxs px-xs py-sm text-secondary-400">
			<div
				v-if="icon"
				class="
					absolute
					-top-md
					left-xs
					flex
					size-fit
					rounded-full
					border-2
					border-white
					bg-gradient-to-b
					from-primary
					to-primary-alt
					p-xxs
					"
			>
				<ui-icon
					:icon-name="icon"
					class="text-white"
				/>
			</div>

			<ui-typography
				v-if="title"
				:size="ETypographySizes.SM"
				:weight="ETextWeight.BOLD"
				line-height
			>
				{{ title }}
			</ui-typography>

			<ui-typography
				v-if="description"
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

	defineProps<{
		icon?: TIconName
		image?: string;
		title?: string;
		description?: string;
	}>();

</script>
