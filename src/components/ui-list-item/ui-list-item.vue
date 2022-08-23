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

	defineProps<{
		icon?: TIconName;
		title?: string;
	}>();

</script>
