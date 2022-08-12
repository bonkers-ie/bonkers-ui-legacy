<template>
	<span
		class="ui-badge rounded-full inline-flex items-center"
		:class="[
			(!size || size === EBadgeSize.SMALL) && 'px-xs py-xxs',
			(!kind || kind === EBadgeKind.PRIMARY) && 'bg-primary-alt-300 text-primary-alt-700',

			kind === EBadgeKind.ERROR && 'bg-error-300 text-error-700',
			kind === EBadgeKind.ACCENT && 'bg-accent-300 text-accent-700',

			size === EBadgeSize.MEDIUM && 'px-xs py-xs',
			size === EBadgeSize.LARGE && 'px-sm py-xs',
		]"
	>
		<ui-icon
			v-if="icon"
			class="mr-xxs"
			:size="ESize.SM"
			:icon-name="icon"
		/>

		<ui-typography
			is="span"
			:size="getBadgeSize"
			:weight="ETextWeight.SEMI_BOLD"
			class="whitespace-nowrap"
		>
			<slot />
		</ui-typography>
	</span>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import { EBadgeKind, EBadgeSize } from "./_typings";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		size?: EBadgeSize;
		kind?: EBadgeKind;
		icon?: TIconName;
	}>();

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
