<template>
	<li
		class="ui-icon-list relative flex place-items-center"
		:class="[kind === EListItemTypes.DEFAULT && 'pb-sm',
			kind === EListItemTypes.COMPACT && 'pb-xs', 
			kind === EListItemTypes.PROGRESS &&'pb-md']"
	>
		<div
			class="ui-progress-start h-full w-xxs bg-primary rounded absolute left-15 -z-10 -translate-y-1/2"
			:style="{left: '6px', top: 'calc(100% - 8px)', height: '100%'}"
		/>

		<ui-icon
			v-if="icon"
			:kind="pickKind"
			:icon-name="icon"
			class="mr-sm"
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
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import UiTypography, { ETextWeight } from "../ui-typography";
	import { EListItemTypes } from "./_types";
	import { computed } from "vue";

	const props = withDefaults(defineProps<{
		icon: TIconName;
		title: string;
		kind?:EListItemTypes;
	}>(), {
		kind: EListItemTypes.DEFAULT
	});

	const pickKind = computed(()=>{
		switch(props.kind){
			case EListItemTypes.COMPACT: return EListItemTypes.COMPACT;
			case EListItemTypes.PROGRESS: return EListItemTypes.PROGRESS;
			default: return EListItemTypes.DEFAULT;
		}
	});

</script>
