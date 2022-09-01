<template>
	<ul class="ui-tabs bg-secondary-alt-200 rounded-full grid grid-flow-col">
		<li
			v-for="tab in tabs"
			:key="tab"
			class="rounded-full text-center"
			:class="[localValue === tab && 'bg-white']"
		>
			<label class="block cursor-pointer py-xs px-md">
				<input
					v-model="localValue"
					type="radio"
					class="appearance-none absolute"
					:value="tab"
					:name="name || 'default'"
					@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement)?.value)"
				>
				<ui-typography
					is="span"
					:size="ETypographySizes.XS"
					:kind="localValue === tab?EColors.SECONDARY_500:EColors.SECONDARY_400"
					:weight="ETextWeight.SEMI_BOLD"
				>
					{{ tab }}
				</ui-typography>
			</label>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { ref, watch } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import { EColors } from "../../_types/colors";

	const props = defineProps<{
		tabs: string[];
		modelValue: string;
		name: string;
	}>();

	defineEmits(["update:modelValue"]);

	const localValue = ref(props.modelValue);

	watch(() => props.modelValue, (newValue) => {
		if(newValue !== localValue.value){
			localValue.value = newValue;
		}
	});

</script>

<style scoped>
	.ui-tabs {
		padding: 2px;
	}
</style>
