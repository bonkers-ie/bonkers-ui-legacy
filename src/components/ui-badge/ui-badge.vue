<template>
	<div
		class="ui-badge rounded-full flex items-center content-center gap-xxs text-white"
		:class="[
			(!size || size === EBadgeSize.SMALL) && 'px-xs py-xxs',
			(!kind || kind === EBadgeKind.PRIMARY) && 'bg-primary-600',

			kind === EBadgeKind.ERROR && 'bg-error-600',
			kind === EBadgeKind.ACCENT && 'bg-accent-600',

			size === EBadgeSize.MEDIUM && 'px-xs py-xs',
			size === EBadgeSize.LARGE && 'px-sm py-xs',
			elipsis && 'max-w-full',
		]"
	>
		<ui-icon
			v-if="icon"
			:size="ESize.SM"
			:icon-name="icon"
		/>

		<ui-typography
			v-if="slots.default"
			:size="getBadgeSize"
			:weight="ETextWeight.REGULAR"
			class="whitespace-nowrap"
			:class="[
				elipsis && 'overflow-hidden overflow-ellipsis',
			]"
		>
			<slot />
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";
	import { EBadgeKind, EBadgeSize } from "./_typings";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		size?: EBadgeSize;
		kind?: EBadgeKind;
		icon?: TIconName;
		elipsis?: boolean;
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
