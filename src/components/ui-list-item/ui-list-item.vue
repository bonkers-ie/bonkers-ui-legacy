
<template>
	<li
		class="ui-list-item flex gap-xs relative group"
		:class="[
			size === EListItemSizes.DEFAULT && 'pb-md',
			size === EListItemSizes.COMPACT && 'pb-xs'
		]"
	>
		<div
			v-if="kind===EListItemTypes.PROGRESS"
			class="ui-list-item__line bg-primary-300 h-full absolute w-xxs left-xs -translate-x-2/4 top-sm group-last:hidden"
		/>

		<ui-icon
			v-if="icon"
			class="bg-white text-primary"
			:icon-name="icon"
			:size="ESize.SM"
		/>

		<div>
			<ui-typography
				v-if="title"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ title }}
			</ui-typography>
			<slot />
		</div>
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
	}>(), {
		kind: EListItemTypes.DEFAULT,
		size: EListItemSizes.COMPACT,
		title: "",
		icon: undefined
	});

</script>
