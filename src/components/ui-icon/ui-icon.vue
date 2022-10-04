<template>
	<font-awesome-icon
		class="ui-icon"
		:icon="iconName"
		:class="[
			size === ESize.XXS && 'h-xxs w-xxs',
			size === ESize.XS && 'h-xs w-xs',
			size === ESize.SM && 'h-sm w-sm',
			size === ESize.MD && 'h-md w-md',
			size === ESize.LG && 'h-lg w-lg',
			size === ESize.XL && 'h-xl w-xl',
			size === ESize.XXL && 'h-xxl w-xxl',
			hasGreenWrapper && 'p-sm bg-primary text-white rounded-3xl',
			hasGreyWrapper && 'p-sm bg-secondary-alt-200 text-black rounded-3xl'
		]"
	/>
</template>

<script lang="ts" setup>
	import { ESize } from "../../_types/sizing";
	import type { TIconName } from "./_typings";

	defineProps<{
		hasGreenWrapper?: boolean;
		hasGreyWrapper?: boolean;
		size: ESize;
		iconName: TIconName;
	}>();
</script>
