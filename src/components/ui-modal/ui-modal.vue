<template>
	<div  class="overlay">
		<div v-if="modalVisible"
			:class="[
						'flex flex-col justify-center items-center rounded-3xl shadow-md py-md px-sm bg-white',
					]"
			>
			<ui-icon
				:icon-name="icon"
				:size="iconSize"
				:class="[
					'mb-md',
					(!kind || kind === EModalTypes.PRIMARY) && 'text-primary',
					kind === EModalTypes.WARNING && 'text-warning',
					kind === EModalTypes.ERROR && 'text-error',
					kind === EModalTypes.SECONDARY && 'text-secondary',

				]"
			/>
			<ui-typography
				v-if="slots.title"
				:weight="ETextWeight.BOLD"
				:align="ETextAlign.CENTER"
				class="pb-md"
			>
				<slot name="title" />
			</ui-typography>
			<ui-typography
				v-if="slots.description"
				:weight="ETextWeight.REGULAR"
				:align="ETextAlign.CENTER"
				class="pb-md"
			>
				<slot name="description" />
			</ui-typography>
			<ui-button full-width @click="modalVisibility">
				OK
			</ui-button>
		</div>
	</div>

</template>
<script lang="ts" setup>
	import UiIcon, { type TIconName } from "../ui-icon";
	import UiButton from "../ui-button"
	import UiTypography, { ETextWeight, ETextAlign } from "../ui-typography";
	import { ESize } from "../../_types/sizing";
	import { EModalTypes } from "./_types";
	import { useSlots, computed } from "vue";

	const slots = useSlots();

		defineProps<{
			modalVisible: boolean
			icon: TIconName
			iconSize: ESize
			modalSize: ESize
			kind?: EModalTypes
		}>();

	const emit = defineEmits<{
		(e: "closeModal", state: boolean): void
	}>();

	const modalVisibility = () => {
		emit("closeModal", false)
	};

</script>
<style lang="scss" scoped>
</style>
