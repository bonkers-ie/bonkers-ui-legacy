<template>
	<font-awesome-icon
		class="ui-icon"
		:icon="iconName"
		:class="[
			size === ESize.XXXS && 'size-xxxs',
			size === ESize.XXS && 'size-xxs',
			size === ESize.XS && 'size-xs',
			size === ESize.SM && 'size-sm',
			size === ESize.MD && 'size-md',
			size === ESize.LG && 'size-lg',
			size === ESize.XL && 'size-xl',
			size === ESize.XXL && 'size-xxl',
			size === ESize.XXXL && 'size-xxxl',
			size === ESize.XXXXL && 'size-xxxxl',
			size === ESize.XXXXXL && 'size-xxxxxl',
		]"
	/>
</template>

<script lang="ts" setup>
	import { ESize } from "../../_types/sizing";
	import type { TIconName } from "./_typings";

	withDefaults(defineProps<{
		size?: ESize;
		iconName: TIconName;
	}>(), {
		size: ESize.SM
	});
</script>
