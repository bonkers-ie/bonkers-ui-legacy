<template>
	<div
		class="ui-snackbar flex w-full justify-between rounded-lg p-sm shadow-md"
		:class="[
			kind === ESnackbarTypes.DEFAULT && 'bg-white',
			kind === ESnackbarTypes.PRIMARY && 'bg-primary text-white',
			kind === ESnackbarTypes.WARNING && 'bg-warning text-white',
			kind === ESnackbarTypes.ERROR && 'bg-error text-white',
			kind === ESnackbarTypes.SECONDARY && 'bg-secondary text-white',
		]"
	>
		<slot>
			<ui-typography
				:size="ETypographySizes.SM"
				class=""
			>
				<slot name="titleSlot">
					{{ title }}
				</slot>
			</ui-typography>

			<ui-typography
				:size="ETypographySizes.XS"
				class=""
			>
				<slot name="articleSlot" />
			</ui-typography>
		</slot>
	</div>
</template>

<script lang="ts" setup>
	import UiTypography, { ETypographySizes } from "../ui-typography";
	import { ESnackbarTypes } from "./_types";

	withDefaults(defineProps<{
		title: string
		kind?: ESnackbarTypes
	}>(), {
		kind: ESnackbarTypes.DEFAULT
	});
</script>
