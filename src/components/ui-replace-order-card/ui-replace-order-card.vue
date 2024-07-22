<template>
	<div
		class="
			relative
			flex
			h-[183px]
			justify-between
			rounded-2xl
			border
			border-secondary-alt-300
			bg-white
			p-sm
			"
	>
		<div class="flex">
			<div
				v-if="icon"
				class="flex size-fit rounded-full border-2 border-white bg-primary p-xxs"
			>
				<ui-icon
					:icon-name="icon"
					class="text-white"
					:size="ESize.MD"
				/>
			</div>

			<div class="ml-xxs">
				<slot name="title">
					<ui-typography
						v-if="title"
						:size="ETypographySizes.SM"
						:weight="ETextWeight.BOLD"
						line-height
					>
						{{ title }}
					</ui-typography>
				</slot>

				<ui-badge
					:size="EBadgeSize.SMALL"
					:icon="icon"
				>
					{{ pillText }}
				</ui-badge>
			</div>
		</div>

		<slot name="providersImage" />
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiBadge, { EBadgeSize } from "../ui-badge";
	import { ESize } from "../../_types/sizing";

	defineProps<{
		icon: TIconName;
		title?: string;
		pillText?: string;

	}>();
</script>
