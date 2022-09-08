<template>
	<div class="ui-order-card">
		<ui-icon
			kind="default-success"
			class="rounded-md-white bg-primary-300"
		/>
		<slot name="icon" />

		<ui-typography
			:align="ETextAlign.CENTER"
			class="rounded-lg shadow-md py-md px-sm bg-primary-300"
		>
			<ui-typography
				v-if="slots.title"
				class="pb-md"
				:size="ETypographySizes.LG"
				:weight="ETextWeight.BOLD"
				
			>
				<slot name="title" />
			</ui-typography>
			
			<ui-typography
				v-if="slots.textBody"
				class="pb-md"
				:size="ETypographySizes.MD"
				:weight="ETextWeight.REGULAR"
			>
				<slot name="textBody" />
			</ui-typography>

			<footer>
				<ui-typography
					v-if="slots.footerSubtitle"
					class="pb-md"
					:size="ETypographySizes.SM"
					:weight="ETextWeight.REGULAR"
				>
					<slot name="footerSubtitle" />
				</ui-typography>
			</footer>
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import uiTypography, { ETextAlign, ETextWeight, ETypographySizes } from "../ui-typography";
	import { useSlots } from "vue";
	import UiTypography from "../ui-typography/ui-typography.vue";

	const slots = useSlots();
</script>
