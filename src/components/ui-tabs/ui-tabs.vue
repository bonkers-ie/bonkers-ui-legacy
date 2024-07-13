<template>
	<ul class="ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200">
		<li
			v-for="tab in tabs"
			:key="tab"
			class="rounded-full text-center"
			:class="[tabsModel === tab && 'bg-white']"
		>
			<label class="block cursor-pointer px-md py-xxs">
				<input
					v-model="tabsModel"
					type="radio"
					class="absolute appearance-none"
					:value="tab"
					:name="name"
				>
				<ui-typography
					is="span"
					:size="ETypographySizes.XS"
					:kind="tabsModel === tab ? EColors.SECONDARY_500 : EColors.SECONDARY_400"
					:weight="ETextWeight.SEMI_BOLD"
				>
					{{ tab }}
				</ui-typography>
			</label>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import UiTypography, { ETypographySizes, ETextWeight } from "../ui-typography";
	import { EColors } from "../../_types/colors";

	const props = withDefaults(defineProps<{
		tabs: string[];
		modelValue: string;
		name?: string;
	}>(), {
		name: "default"
	});

	const emit = defineEmits(["update:modelValue"]);

	const tabsModel = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			emit("update:modelValue", value);
		}
	});

</script>

<style scoped>
	.ui-tabs {
		padding: 2px;
	}
</style>
