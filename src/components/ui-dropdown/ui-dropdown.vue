<template>
	<div
		class="bg-white"
		:class="{
			'rounded-lg border border-secondary-alt-300': kind === EDropdownKinds.DEFAULT,
		}"
	>
		<div
			class="flex justify-between px-md py-sm"
			:class="{
				'rounded-lg border border-secondary': kind === EDropdownKinds.SECONDARY
					|| kind === EDropdownKinds.OPENED
			}"
			@click="isOpen = !isOpen"
		>
			<ui-typography
				line-height
				:size="ETypographySizes.MD"
				:weight="ETextWeight.SEMI_BOLD "
			>
				{{ header }}
			</ui-typography>

			<ui-icon
				class="item-icon duration-200"
				:class="{
					'rotate-180': isOpen ? kind === EDropdownKinds.DEFAULT || kind === EDropdownKinds.SECONDARY :
						'rotate-0' ? kind === EDropdownKinds.OPENED : !isOpen
				}"
				:icon-name="iconName"
				:size="ESize.MD"
			/>
		</div>

		<div
			class="overflow-hidden duration-300"
			:style="{
				height: accordionHeight + 'px'
			}"
			:class="{
				'border border-transparent border-t-secondary-alt-300':
					kind === EDropdownKinds.DEFAULT,
				'!h-0 opacity-0': !isOpen ? kind === EDropdownKinds.DEFAULT || kind === EDropdownKinds.SECONDARY:
					'h-auto opacity-100' ? kind === EDropdownKinds.OPENED : isOpen,

			}"
		>
			<div
				ref="contentRef"
				class="box-border pt-sm"
				:class="{
					'p-sm': kind === EDropdownKinds.DEFAULT,

				}"
			>
				<slot>
					{{ subText }}
				</slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName, ESize } from "../ui-icon";
	import { onMounted, ref } from "vue";
	import { EDropdownKinds } from "./_typings";

	const isOpen = ref(false);

	const contentRef = ref<null | HTMLDivElement>(null);
	const accordionHeight = ref<number>(0);

	withDefaults(defineProps<{
		header?: string;
		iconName: TIconName;
		subText?: string;
		kind?: EDropdownKinds

	}>(), {
		kind: EDropdownKinds.DEFAULT
	});

	onMounted(()=>{
		if (contentRef.value) {
			const { height } = contentRef.value.getBoundingClientRect();
			accordionHeight.value = height;
		}
	});

</script>
