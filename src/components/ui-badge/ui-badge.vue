<template>
	<div
		class="ui-badge relative overflow-hidden"
		:class="{
			'bg-primary-100 text-primary-700': color === EBadgeColor.PRIMARY,
			'bg-error-300 text-error-700': color === EBadgeColor.ERROR,
			'bg-warning-300 text-warning-700': color === EBadgeColor.WARNING,
			'bg-accent-300 text-accent-700': color === EBadgeColor.ACCENT,
			'bg-primary-300 text-primary-800': color === EBadgeColor.PRIMARYALT,
			'bg-white text-secondary-300 outline outline-1 outline-secondary-alt-300': color === EBadgeColor.SECONDARY,
			'bg-accent-alt-500 text-secondary-700': color === EBadgeColor.ACCENTALT,
			'rounded': kind === EBadgeKind.DEFAULT,
			'rounded-full': kind === EBadgeKind.ROUNDED
		}"
	>
		<div class="relative z-[1] flex content-center items-center gap-xxxs px-xxs py-xxxs">
			<ui-icon
				v-if="icon"
				:size="ESize.SM"
				:icon-name="icon"
			/>

			<ui-typography
				v-if="slots.default"
				:size="getBadgeSize"
				:weight="ETextWeight.SEMI_BOLD"
				class="whitespace-nowrap"
				line-height
			>
				<slot name="default" />
			</ui-typography>
		</div>

		<div
			class="absolute left-0 top-0 size-full"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";
	import { EBadgeColor, EBadgeKind, EBadgeSize } from "./_typings";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		size?: EBadgeSize;
		kind?: EBadgeKind;
		color?: EBadgeColor
		icon?: TIconName;
	}>();

	const slots = useSlots();

	const getBadgeSize = computed(()=>{
		switch (props.size) {
			case EBadgeSize.MEDIUM:
				return ETypographySizes.XS;
			case EBadgeSize.LARGE:
				return ETypographySizes.SM;
			case EBadgeSize.SMALL:
			default:
				return ETypographySizes.XXS;
		}
	});
</script>
