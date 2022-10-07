<template>
	<div 
		class="ui-list-item"
	>
		<li class="ui-icon-list flex">
			<ui-icon
				v-if="icon"
				:class="[
					kind === EListItemTypes.DEFAULT && 'ml-sm',
					kind === EListItemTypes.COMPACT && 'ml-xs'
				]"
				:kind="pickKind"
				:icon-name="icon"
				:size="ESize.SM"
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
						kind === EListItemTypes.COMPACT && 'mt-xs'
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

	const newLocal = "\u0075\u0069\u002d\u006c\u0069\u0073\u0074\u002d\u0069\u0074\u0065\u006d";
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
			default: return EListItemTypes.COMPACT;
		}
	});

</script>
