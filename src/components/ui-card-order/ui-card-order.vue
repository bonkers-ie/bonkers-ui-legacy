<template>
	<div
		class="
			ui-card-order
			relative
			grid
			gap-xxs
			whitespace-nowrap
			rounded-2xl
			border
			border-secondary-alt-300
			bg-white
			p-sm
			"
	>
		<div class="flex gap-xxs">
			<ui-icon-wrapper
				class="rounded-full"
				:kind="EIconWrapperTypes.PRIMARY"
			>
				<ui-icon
					:icon-name="icon"
					:size="ESize.MD"
				/>
			</ui-icon-wrapper>

			<div>
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

				<slot name="subtitle" />
			</div>

			<div class="flex w-full justify-end">
				<slot name="providersImage" />
			</div>
		</div>

		<div class="grid">
			<ui-typography
				:size="ETypographySizes.XS"
				:weight="ETextWeight.SEMI_BOLD"
				line-height
			>
				<slot name="contentHeader">
					{{ contentHeader }}
				</slot>
			</ui-typography>

			<ui-typography
				:size="ETypographySizes.XS"
				line-height
			>
				<slot name="descriptions">
					{{ description }}
				</slot>
			</ui-typography>

			<slot name="footer" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiIconWrapper, { EIconWrapperTypes } from "../ui-icon-wrapper";
	import { ESize } from "../../_types/sizing";

	defineProps<{
		icon: TIconName;
		title?: string;
		contentHeader?: string;
		description?: string;
	}>();
</script>
