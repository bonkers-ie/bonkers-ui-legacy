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
			@click="toggleEvent"
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

			@before-enter="onBeforeEnter"
			@enter="enter"
			@leave="leave"
		>
			<div
				v-show="isOpen"
				:class="{
					'overflow-hidden border border-transparent border-t-secondary-alt-300 opacity-0':
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
	import gsap from "gsap";

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

	function toggleEvent() {
		isOpen.value = !isOpen.value;
		t.reversed() ? t.play() : t.reversed();
	}

	const t = gsap.timeline({
		paused: true,
		reversed: true
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onBeforeEnter(el: Element | any) {
		el.style.height = "0";
		el.style.opacity = "0";
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function enter(el: Element | any, done: ()=> void) {
		t.to(el, {
			height: "auto",
			transform: "height",
			duration: 0.2,
			opacity: 1,
			onComplete: done

		}).play();

	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function leave(el: Element | any, done: ()=> void) {
		t.to(el, {
			height: "0",
			opacity: 0,
			transform: "height",
			duration: 0.2,
			onComplete: done

		}).play();

	}

</script>
