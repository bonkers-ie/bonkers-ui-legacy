<template>
	<li class="ui-icon-list flex">
		<ui-icon
			v-if="icon"
			class="mr-xs"
			:size="ESize.SM"
			:icon-name="icon"
		/>

		<div>
			<ui-typography
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ title }}
			</ui-typography>
			<p
				v-if="$slots.default"
				class="mt-xs"
				:class="[
					kind === EListItemTypes.DEFAULT && 'mt-xs',
					kind === EListItemTypes.COMPACT && 'mt-xxs'
				]"
			>
				<slot />
			</p>
		</div>
	</li>
</template>

<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETextWeight } from "../ui-typography";
	import { EListItemTypes } from "./_types";

	defineProps<{
		icon?: TIconName;
		title?: string;
		kind?:EListItemTypes;
	}>();

</script>
