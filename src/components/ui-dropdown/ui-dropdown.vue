<template>
	<div
		class="bg-white"
		:class="{
			'rounded-lg border border-secondary-alt-300': kind === EDropdownKinds.DEFAULT
		}"
	>
		<div
			class="flex items-center justify-between px-md py-sm"
			:class="{
				'rounded-lg border border-secondary': kind === EDropdownKinds.SECONDARY
			}"
			@click="isOpen = !isOpen"
		>
			<ui-typography
				line-height
				:size="ETypographySizes.LG"
				:weight="ETextWeight.SEMI_BOLD "
			>
				{{ header }}
			</ui-typography>

			<ui-icon
				class="item-icon duration-200"
				:class="{
					'rotate-180': isOpen,
					'rotate-0': !isOpen
				}"
				:icon-name="iconName"
				:size="ESize.SM"
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
				'!h-0 opacity-0': !isOpen,
				'h-auto opacity-100': isOpen

			}"
		>
			<div
				ref="contentRef"
				class="box-border pt-sm"
				:class="{
					'p-sm': kind === EDropdownKinds.DEFAULT

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
	import { onMounted, ref } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName, ESize } from "../ui-icon";
	import { EDropdownKinds } from "./_typings";

	const contentRef = ref<null | HTMLDivElement>(null);
	const accordionHeight = ref<number>(0);

	const props = withDefaults(defineProps<{
		header?: string;
		iconName: TIconName;
		subText?: string;
		kind?: EDropdownKinds;
		active?: boolean;

	}>(), {
		kind: EDropdownKinds.DEFAULT,
	});

	const isOpen = ref(props.active);

	onMounted(()=>{
		if (contentRef.value) {
			const { height } = contentRef.value.getBoundingClientRect();
			accordionHeight.value = height;
		}
	});

</script>
