<template>
	<div 
		class="ui-list-item"
	>
		<li class="ui-icon-list flex">
			<ui-icon
				v-if="icon"
				:kind="pickKind"
				:icon-name="icon"
				:size="ESize.SM"
				:class="[
					kind === EListItemTypes.DEFAULT && 'mr-xs ml-sm',
					kind === EListItemTypes.COMPACT && 'mr-xs ml-xs'
				]"
			/>
			<div>
				<ui-typography
					:weight="ETextWeight.SEMI_BOLD"
				>
					{{ title }}
				</ui-typography>
				<p
					v-if="$slots.default"
					class="mt-sm"
					:class="[
						kind === EListItemTypes.DEFAULT && 'mt-sm'
					]"
				/>
				<slot name="default" />
				<p
					v-if="$slots.compact"
					class="mt-xs"
					:class="[
						kind === EListItemTypes.COMPACT && 'mt-xs mb-xs'
					]"
				>	
					<slot name="compact" />
				</p>
			</div>
		</li>
	</div>
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
