<template>
	<div
		class="ui-badge relative overflow-hidden text-white"
	>
		<div class="relative z-[1] flex content-center items-center gap-xxs px-xs py-xxs">
			<ui-icon
				v-if="icon"
				:size="ESize.SM"
				:icon-name="icon"
			/>

			<ui-typography
				v-if="slots.default"
				:size="getBadgeSize"
				class="whitespace-nowrap"
				line-height
			>
				<slot name="default" />
			</ui-typography>
		</div>

		<div
			class="absolute left-0 top-0 size-full rounded-full"
			:class="[
				(!kind || kind === EBadgeKind.PRIMARY) && 'bg-primary-600',

				kind === EBadgeKind.ERROR && 'bg-error-600',
				kind === EBadgeKind.ACCENT && 'bg-accent-600',
			]"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { computed, useSlots } from "vue";
	import { EBadgeKind, EBadgeSize } from "./_typings";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETypographySizes } from "../ui-typography";

	const props = defineProps<{
		size?: EBadgeSize;
		kind?: EBadgeKind;
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
