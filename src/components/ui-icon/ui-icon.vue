<template>
	<font-awesome-icon
		:icon="iconName"
		:class="[
			size === ESize.XXS && 'h-xxs w-xxs',
			size === ESize.XS && 'h-xs w-xs',
			size === ESize.SM && 'h-sm w-sm',
			size === ESize.MD && 'h-md w-md',
			size === ESize.LG && 'h-lg w-lg',
			size === ESize.XL && 'h-xl w-xl',
			size === ESize.XXL && 'h-xxl w-xxl',
			hasWrapper && 'p-sm bg-primary rounded-2xl',
			className
		]"
	/>
</template>

<script lang="ts" setup>
	import { ESize } from "../../_types/sizing";

	type TIconPrefix = "fab" | "far" | "fas" | "fal" | "fad" | "fat";

	defineProps<{
		className?: string;
		hasWrapper?: boolean;
		size: ESize;
		iconName: [TIconPrefix, string];
	}>();
</script>
