<template>
	<div
		class="
			relative
			grid
			h-[183px]
			grid-cols-2
			whitespace-nowrap
			rounded-2xl
			border
			border-secondary-alt-300
			bg-white
			p-sm
			"
	>
		<div class="flex">
			<ui-icon-wrapper
				class="rounded-full"
				:kind="EIconWrapperTypes.PRIMARY"
			>
				<ui-icon
					:icon-name="icon"
					:size="ESize.MD"
				/>
			</ui-icon-wrapper>

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

		<div class="mt-xxs flex flex-col">
			<slot name="descriptions" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiIconWrapper, { EIconWrapperTypes } from "../ui-icon-wrapper";
	import UiBadge, { EBadgeSize } from "../ui-badge";
	import { ESize } from "../../_types/sizing";

	defineProps<{
		icon: TIconName;
		title?: string;
		pillText?: string;

	}>();
</script>
