
<template>
	<li class="ui-list-item flex gap-xs relative group">
		<div
			v-if="kind===EListItemTypes.PROGRESS"
			class="ui-list-item__line bg-primary-300 h-full absolute w-xxs left-xs -translate-x-2/4 top-sm group-last:hidden"
		/>
		<ui-icon
			v-if="icon"
			:kind="pickKind"
			class="bg-white text-primary"
			:icon-name="icon"
			:size="ESize.SM"
		/>

		<slot>
			<ui-typography
				:weight="ETextWeight.SEMI_BOLD"
			>
				{{ title }}
			</ui-typography>
		</slot>
	</li>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiTypography, { ETextWeight } from "../ui-typography";
	import { ESize } from "../../_types/sizing";
	import { EListItemTypes } from "./_types";

	const props = withDefaults(defineProps<{
		icon: TIconName;
		title: string;
		kind?:EListItemTypes;
	}>(), {
		kind: EListItemTypes.DEFAULT
	});

	const pickKind = computed(()=>{
		switch(props.kind){
			case EListItemTypes.DEFAULT: return EListItemTypes.DEFAULT;
			case EListItemTypes.PROGRESS: return EListItemTypes.PROGRESS;
			default: return EListItemTypes.DEFAULT;
		}
	});

</script>
