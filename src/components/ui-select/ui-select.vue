<template>
	<div class="ui-select">
		<ui-typography
			v-if="heading"
			:weight="ETextWeight.SEMI_BOLD"
			class-name="mb-sm"
		>
			{{ heading }}
		</ui-typography>
		<div
			class="relative rounded-lg border bg-white border-secondary-alt-500 hover:border-secondary-alt-700"
			:class="[disabled && 'pointer-events-none bg-secondary-alt-200 border-secondary-alt-300']"
		>
			<select
				v-model="localModel"
				class="appearance-none bg-transparent border-0 m-0 outline-0 w-full p-sm cursor-pointer italic text-secondary-alt"
				@change=" $emit('update:value', ($event.target as HTMLTextAreaElement)?.value)"
			>
				<option
					v-for="item in list"
					:key="item"
					:value="item"
				>
					{{ item }}
				</option>
			</select>

			<div class="ui-select__icon-wrapper absolute right-sm">
				<slot name="postfix-icon" />
			</div>
		</div>
		<ui-typography
			v-if="subLabel"
			:size="ETypographySizes.SM"
			class-name="mt-sm"
		>
			{{ subLabel }}
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import { ref, watch } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";

	const props = defineProps<{
		list: string[];
		value: string;
		heading?: string;
		subLabel?: string;
		disabled?: boolean;
	}>();

	defineEmits(["update:value"]);

	const localModel = ref(props.value);

	watch(() => props.value, (value) => {
		localModel.value = value;
	});
</script>

<style scoped>
	.ui-select__icon-wrapper {
		top: 50%;
		transform: translateY(-50%);
	}
</style>
