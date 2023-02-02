
<template>
	<li
		class="ui-list-item grid grid-flow-col justify-start gap-xs relative group"
		:class="[
			size === EListItemSizes.DEFAULT && 'pb-md',
			size === EListItemSizes.COMPACT && 'pb-xs'
		]"
	>
		<div
			v-if="kind === EListItemTypes.PROGRESS"
			class="ui-list-item__line bg-primary-300 h-full absolute w-xxs left-xs -translate-x-2/4 top-sm group-last:hidden"
		/>

		<slot name="icon">
			<ui-icon
				v-if="icon"
				class="bg-white z-[1] mt-[0.2em]"
				:class="iconClass"
				:icon-name="icon"
				:size="ESize.SM"
			/>
		</slot>

		<span>
			<ui-typography
				v-if="title"
				:weight="ETextWeight.SEMI_BOLD"
				line-height
			>
				{{ title }}

			</ui-typography>
			<slot />
		</span>
	</li>
</template>

<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight } from "../ui-typography";
	import { ESize } from "../../_types/sizing";
	import { EListItemTypes, EListItemSizes } from "./_types";

	withDefaults(defineProps<{
		icon?: TIconName
		title?: string
		kind?: EListItemTypes
		size?: EListItemSizes
		iconClass?: string
	}>(), {
		kind: EListItemTypes.DEFAULT,
		size: EListItemSizes.COMPACT,
		title: "",
		iconClass: "text-secondary-alt",
		icon: undefined
	});

</script>
