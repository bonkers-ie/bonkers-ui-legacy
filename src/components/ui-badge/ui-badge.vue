<template>
	<div
		class="ui-badge relative text-white overflow-hidden"
		:class="[
			more && 'mr-sm',
		]"
	>
		<div class="relative z-[1] flex items-center content-center gap-xxs px-xs py-xxs">
			<ui-icon
				v-if="icon"
				:size="ESize.XS"
				:icon-name="icon"
			/>

			<ui-typography
				v-if="slots.default"
				:size="getBadgeSize"
				:weight="ETextWeight.SEMI_BOLD"
				class="whitespace-nowrap"
				line-height
				:class="[
					elipsis && 'overflow-hidden overflow-ellipsis',
				]"
			>
				<slot />
			</ui-typography>
		</div>

		<div
			v-if="more"
			class="absolute top-0 left-[15px] w-full h-full bg-primary-300 rounded-full border border-white"
		/>

		<div
			v-if="more"
			class="absolute top-0 left-xs w-full h-full bg-primary-400 rounded-full border border-white"
		/>

		<div
			class="absolute rounded-full top-0 left-0 w-full h-full"
			:class="[
				(!kind || kind === EBadgeKind.PRIMARY) && 'bg-primary-600',

				kind === EBadgeKind.ERROR && 'bg-error-600',
				kind === EBadgeKind.ACCENT && 'bg-accent-600',
				elipsis && 'max-w-full',
				more && 'border border-white',
			]"
		/>
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
		more?: boolean;
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
