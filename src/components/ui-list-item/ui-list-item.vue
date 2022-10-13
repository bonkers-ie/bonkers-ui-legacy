<template>
	<li
		class="ui-icon-list flex place-items-center"
		:class="[kind === EListItemTypes.DEFAULT && 'mb-sm',
			kind === EListItemTypes.COMPACT && 'mb-xs']"
	>
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
			default: return EListItemTypes.DEFAULT;
		}
	});

</script>
