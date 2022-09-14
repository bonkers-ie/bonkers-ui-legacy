<template>
	<div
		class="ui-alert flex gap-sm p-sm border rounded-lg"
		:class="[
			(!kind || kind === EAlertTypes.PRIMARY) && 'border-primary',
			kind === EAlertTypes.WARNING && 'border-warning',
			kind === EAlertTypes.ERROR && 'border-error',
			kind === EAlertTypes.SECONDARY && 'border-secondary',
			kind === EAlertTypes.PRIMARY && 'border-white'
		]"
	>
		<ui-icon
			:icon-name="icon"
			:size="ESize.SM"
			:class="[
				(!kind || kind === EAlertTypes.PRIMARY) && 'text-primary',
				kind === EAlertTypes.WARNING && 'text-warning',
				kind === EAlertTypes.ERROR && 'text-error',
				kind === EAlertTypes.SECONDARY && 'text-secondary',
			]"
		/>
		<ui-typography
			:size="ETypographySizes.XS"
			line-height
		>
			<slot />
		</ui-typography>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes } from "../ui-typography";
	import UiIcon, { type TIconName } from "../ui-icon";
	import { ESize } from "../../_types/sizing";
	import { EAlertTypes } from "./_types";

	defineProps<{
		icon: TIconName
		kind?: EAlertTypes
	}>();
</script>
