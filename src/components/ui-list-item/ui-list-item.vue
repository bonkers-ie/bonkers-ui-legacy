
<template>
	<li
		class="ui-list-item grid grid-flow-col justify-start gap-xs relative group text-secondary"
		:class="[
			size === EListItemSize.SM && 'text-sm',
			size === EListItemSize.MD && 'text-md',
			spacing === EListItemSpacing.DEFAULT && 'pb-sm',
			spacing === EListItemSpacing.COMPACT && 'pb-xs'
		]"
	>
		<div
			v-if="kind === EListItemTypes.PROGRESS"
			class="ui-list-item__line bg-primary-300 h-full absolute w-xxs left-xs -translate-x-2/4 top-sm group-last:hidden"
		/>

		<slot name="icon">
			<ui-icon
				v-if="icon"
				class="bg-white"
				:class="iconClass"
				:icon-name="icon"
				:size="ESize.SM"
			/>
		</slot>

		<div>
			<ui-typography
				v-if="title"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ title }}
			</ui-typography>

			<ui-typography
				v-if="$slots.default"
				:class="[title && 'mt-xxs']"
				:weight="ETextWeight.LIGHT"
			>
				<slot />
			</ui-typography>
		</div>
	</li>
</template>

<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight } from "../ui-typography";
	import { ESize } from "../../_types/sizing";
	import { EListItemTypes, EListItemSpacing, EListItemSize } from "./_types";

	withDefaults(defineProps<{
		icon?: TIconName
		title?: string
		kind?: EListItemTypes
		size?: EListItemSize
		spacing?: EListItemSpacing
		iconClass?: string
	}>(), {
		kind: EListItemTypes.DEFAULT,
		size: EListItemSize.SM,
		spacing: EListItemSpacing.COMPACT,
		title: "",
		icon: undefined,
		iconClass: "",
	});

</script>
