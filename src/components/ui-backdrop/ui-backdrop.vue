<template>
	<div
		class="ui-backdrop"
	>
		<transition
			name="ui-backdrop"
			enter-active-class="transition-opacity"
			enter-from-class="opacity-0"
			leave-active-class="transition-opacity"
			leave-to-class="opacity-0 delay-400"
		>
			<div
				v-if="visible"
				class="
				absolute
				overflow-y-auto
				h-full
				w-full
				bg-black
				opacity-60
				flex
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
