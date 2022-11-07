<template>
	<div class="ui-backdrop">
		<transition
			name="fade"
			enter-active-class="transition-opacity duration-300"
			leave-active-class="transition-opacity duration-300 opacity-0"
			enter-from-class="opacity-0"
			leave-to-class="opacity-0"
		>
			<div
				v-if="visible"
				class="
				fixed
				backdrop-blur-sm
				bg-secondary-300
				transition-all
				opacity-50
				inset-0
				z-0
				"
			/>
		</transition>
	</div>
</template>

<script lang="ts" setup>

	defineProps<{
		visible: boolean;
	}>();

</script>
