<template>
	<div
		class="ui-radio-fancy grid gap-sm"
	>
		<ui-radio-item
			v-for="(item, index) in items"
			:key="index"
			v-model="localValue"
			:title="item.title"
			:value="String(index)"
			:name="name"
			:icon-name="[EIconType.FAR,'face-smile']"
			@update:model-value="$emit('update:modelValue', $event)"
		/>
	</div>
</template>

<script lang="ts" setup>
	import UiRadioItem from "./ui-radio-item";
	import { ref, watch } from "vue";
	import { EIconType } from "../ui-icon/_typings";

	const props = defineProps< {
		name: string;
		modelValue: string;
	}>();

	defineEmits(["update:modelValue"]);

	const items = [
		{
			title: "title",
			iconName: [EIconType.FAR, "face-smile"],
		},
		{
			title: "title",
			iconName: [EIconType.FAR, "face-smile"],
		},
		{
			title: "title",
			iconName: [EIconType.FAR, "face-smile"],
		},
	];

	const localValue = ref(props.modelValue);

	watch(()=>props.modelValue, (newValue)=>{
		if(newValue !== localValue.value){
			localValue.value = newValue;
		}
	});

</script>

<style>
	.ui-radio-fancy {
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}
</style>
