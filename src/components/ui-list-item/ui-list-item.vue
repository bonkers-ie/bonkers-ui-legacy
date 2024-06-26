
<template>
	<li
		class="ui-list-item group relative grid grid-flow-col justify-start gap-xxs text-secondary"
		:class="[
			size === EListItemSize.SM && 'text-sm',
			size === EListItemSize.MD && 'text-md',
			spacing === EListItemSpacing.DEFAULT && 'pb-sm',
			spacing === EListItemSpacing.COMPACT && 'pb-xxs'
		]"
	>
		<div
			v-if="kind === EListItemTypes.PROGRESS"
			class="
				ui-list-item__line
				absolute
				left-xxs
				top-sm
				h-full
				w-xxxs
				-translate-x-2/4
				bg-primary-300
				group-last:hidden
			"
		/>

		<slot name="icon">
			<ui-icon
				v-if="icon"
				class="absolute left-0 bg-white"
				:class="iconClass"
				:icon-name="icon"
				:size="ESize.SM"
			/>
		</slot>

		<div class="ml-md">
			<ui-typography
				v-if="title"
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ title }}
			</ui-typography>

			<ui-typography
				v-if="$slots.default"
				:class="[title && 'mt-xxxs']"
				:weight="ETextWeight.LIGHT"
			>
				<slot name="default" />
			</ui-typography>
		</div>
	</li>
</template>

<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight } from "../ui-typography";
	import { ESize } from "../../_types/sizing";
	import { EListItemTypes, EListItemSpacing, EListItemSize } from "./_types";
	import type { HTMLAttributes } from "vue";

	withDefaults(defineProps<{
		icon?: TIconName
		title?: string
		kind?: EListItemTypes
		size?: EListItemSize
		spacing?: EListItemSpacing
		iconClass?: HTMLAttributes["class"]
	}>(), {
		kind: EListItemTypes.DEFAULT,
		size: EListItemSize.SM,
		spacing: EListItemSpacing.COMPACT,
		title: "",
		icon: undefined,
		iconClass: "",
	});

</script>
