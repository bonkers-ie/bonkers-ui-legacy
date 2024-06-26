<template>
	<div
		class="ui-order-card relative mt-sm rounded-md pt-md text-center"
		:class="[
			kind === EOrderCardTypes.DEFAULT && 'bg-primary-300 text-white',
			kind === EOrderCardTypes.WARNING && 'bg-warning-300 text-warning-700'
		]"
	>
		<ui-icon
			:icon-name="iconName"
			:size="ESize.LG"
			class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300"
			:class="[
				kind === EOrderCardTypes.DEFAULT && 'text-white',
				kind === EOrderCardTypes.WARNING && 'bg-warning-300 text-white'
			]"
		/>
		<ui-typography
			v-if="$slots.title"
			class="pt-sm"
			:class="[
				kind === EOrderCardTypes.DEFAULT && 'text-primary-700',
				kind === EOrderCardTypes.WARNING && 'text-warning-700'
			]"
			:kind="pickKind"
			:size="ETypographySizes.XL"
			:weight="ETextWeight.BOLD"
		>
			<slot name="title" />
		</ui-typography>

		<ui-typography
			v-if="$slots.textBody"
			class="mb-sm p-sm"
			:class="[
				kind === EOrderCardTypes.DEFAULT && 'text-primary-700',
				kind === EOrderCardTypes.WARNING && 'text-warning-700'
			]"
			:size="ETypographySizes.MD"
			:weight="ETextWeight.REGULAR"
		>
			<slot name="textBody" />
		</ui-typography>

		<ui-typography
			v-if="$slots.footer"
			class="rounded-b-xl py-sm text-white"
			:class="[
				kind === EOrderCardTypes.DEFAULT && 'bg-primary-700',
				kind === EOrderCardTypes.WARNING && 'bg-warning-700'
			]"
			:size="ETypographySizes.XXS"
			:weight="ETextWeight.REGULAR"
		>
			<slot name="footer" />
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import { ESize } from "../../_types/sizing";
	import { EColors } from "../../_types/colors";
	import UiTypography, { ETextWeight, ETypographySizes } from "../ui-typography";
	import type { TIconName } from "../ui-icon";
	import UiIcon from "../ui-icon";
	import { EOrderCardTypes } from "./_types";

	const props = withDefaults(defineProps<{
		iconName: TIconName;
		kind?: EOrderCardTypes;
	}>(), {
		kind: EOrderCardTypes.DEFAULT
	});

	const pickKind = computed(()=>{
		switch (props.kind) {
			case EOrderCardTypes.WARNING: return EColors.WARNING_700;
			default: return EColors.PRIMARY_700;
		}
	});

</script>
