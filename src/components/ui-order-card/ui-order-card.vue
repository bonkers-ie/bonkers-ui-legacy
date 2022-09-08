<template>
	<div
		class="ui-order-card-success rounded-lg shadow-md py-md px-sm bg-primary-300"
	>
		<div
			align-items="absolute-center"
			color="bg-primary-300"
			class="ui-order-card-icon"
			height="40px"
			width="40px"
		/>
		
		<ui-typography
			v-if="slots.title"
			:weight="ETextWeight.BOLD"
			:align="ETextAlign.CENTER"
			class="pb-md"
		>
			<slot name="title" />
		</ui-typography>

		<slot />

		<ui-typography
			v-if="slots.footerSubtitle"
			:align="ETextAlign.CENTER"
		>
			<slot name="footerSubtitle" />
		</ui-typography>
	</div>
	<div class="ui-order-card-warning rounded-lg shadow-md py-md px-sm bg-warning-300">
		<ui-typography
			v-if="slots.title"
			:weight="ETextWeight.BOLD"
			:align="ETextAlign.CENTER"
			class="pb-md"
		>
			<slot name="title" />
		</ui-typography>

		<slot />

		<ui-typography
			v-if="slots.footerSubtitle"
			:align="ETextAlign.CENTER"
		>
			<slot name="footerSubtitle" />
		</ui-typography>
	</div>
</template>
		<script
			lang="ts"
			setup
		>
	import uiTypography, { ETextAlign, ETextWeight } from "../ui-typography";
	import { useSlots } from "vue";

	const slots = useSlots();
		</script>
