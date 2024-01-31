<template>
	<div
		class="h-auto bg-white"
		:class="{
			'rounded-lg border border-secondary-alt-300': kind === EDropdownKinds.DEFAULT
		}"
	>
		<div
			class="flex items-center justify-between px-md py-sm"
			:class="{
				'rounded-lg border border-secondary': kind === EDropdownKinds.SECONDARY
			}"
			@click="toggleAccordion"
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
		<transition
			class="transition-height overflow-hidden duration-300 ease-in-out"
			@enter="enter"
			@after-enter="afterEnter"
			@leave="leave"
		>
			<div
				v-if="isOpen"
				:class="{
					'border border-transparent border-t-secondary-alt-300':
						kind === EDropdownKinds.DEFAULT,

				}"
			>
				<div
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
		</transition>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import UiIcon, { type TIconName, ESize } from "../ui-icon";
	import { EDropdownKinds } from "./_typings";

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

	function toggleAccordion() {
		isOpen.value = !isOpen.value;

	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function enter(el : Element | any) {
		const height = getComputedStyle(el).height;
		el.style.height = height;
		el.style.height = "0";

		setTimeout(() => {
			el.style.height = height;
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function afterEnter (el: Element | any) {
		el.style.height = getComputedStyle(el).height;
		el.style.height = "fit-content";
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function leave(el: Element | any) {
		el.style.height = getComputedStyle(el).height;

		setTimeout(() => {
			el.style.height = "0";
		});
	}

</script>
