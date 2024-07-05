<template>
	<div
		class="ui-badge relative inline-flex overflow-hidden rounded"

		:class="{
			'bg-primary-100 text-primary-700': kind === EBadgeKind.PRIMARY,
			'bg-error-300 text-error-700': kind === EBadgeKind.ERROR,
			'bg-warning-300 text-warning-700': kind === EBadgeKind.WARNING,
			'bg-accent-300 text-accent-700': kind === EBadgeKind.ACCENT,
			'bg-primary-300 text-primary-800': kind === EBadgeKind.PRIMARY_ALT,
			'bg-white text-secondary-300 outline outline-1 outline-secondary-alt-300':
				kind === EBadgeKind.SECONDARY,
			'bg-accent-alt-500 text-secondary-700': kind === EBadgeKind.ACCENT_ALT,
			'rounded-full': rounded
		}"
	>
		<div
			class="relative z-[1] flex content-center items-center gap-xxxs px-xxs py-xxxs"
		>
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
	</div>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";
	import { EBadgeKind, EBadgeSize } from "./_typings";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = withDefaults( defineProps<{
		size?: EBadgeSize;
		kind?: EBadgeKind;
		icon: TIconName;
		rounded?: boolean;
	}>(), {
		size: EBadgeSize.SMALL,
		kind: EBadgeKind.PRIMARY,
		rounded: false

	});

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
