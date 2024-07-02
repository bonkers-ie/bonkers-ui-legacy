<template>
	<div
		v-if="props.kind === ESkeletonKind.RESULT_CARD"
		class="ui-skeleton-card animate-pulse rounded-2xl border-2 border-secondary-alt-300 p-xxs"
	>
		<div
			class="
				ui-skeleton-card__header
				flex
				items-center
				justify-between
				rounded-xl
				bg-secondary-alt-200
				p-xxs
				"
		>
			<div class="flex w-full flex-col items-start">
				<div
					class="
						ui-skeleton-card__content__text
						my-xxs
						h-md
						w-full
						rounded-md
						bg-secondary-alt-300
						"
				/>
				<div
					class="
						ui-skeleton-card__content__text
						h-md
						w-5/6
						rounded-md
						bg-secondary-alt-300
						"
				/>
			</div>
			<div
				class="
					ui-skeleton-card__header__image
					rounded-xxxxl
					my-xxxs
					ml-sm
					h-xxxxl
					w-xxxxxl
					bg-secondary-alt-300
					"
			/>
		</div>

		<div
			class="
				ui-skeleton-card__content
				flex
				flex-col
				items-start
				justify-start
				rounded-xl
				pt-sm
				"
		>
			<div
				v-for="i in ['w-1/2', 'w-1/3', 'w-2/3', 'w-3/4']"
				:key="i"
				:class="`${i}`"
				class="
					ui-skeleton-card__content__text
					mb-xxs
					h-md
					rounded-md
					bg-secondary-alt-300
					"
			/>
		</div>

		<div class="ui-skeleton-card__footer flex flex-row justify-between">
			<div
				class="
					ui-skeleton-card__footer__text
					h-md
					w-1/4
					self-end
					rounded-xl
					bg-secondary-alt-300
					"
			/>
			<div
				class="
					ui-skeleton-card__footer__text
					h-xl
					w-1/4
					rounded-xl
					bg-secondary-alt-300
					"
			/>
		</div>

		<div
			class="
				ui-skeleton-card__button
				mt-xxs
				flex
				h-md
				w-full
				items-center
				justify-center
				rounded-xl
				bg-secondary-alt-300
				py-md
				"
		/>
	</div>
	<div
		v-else
		class="ui-skeleton-menu mb-sm flex animate-pulse flex-row items-center justify-between"
	>
		<div
			class="
				ui-skeleton-menu__result-count
				h-sm
				w-full
				max-w-xxxxxl
				rounded-md
				bg-secondary-alt-300
				"
		/>
		<div class="ui-skeleton-menu__filters relative flex h-xl w-xxxxxl flex-row gap-x-sm">
			<div
				v-for="i in 2"
				:key="i"
				class="
					ui-skeleton-menu__filters__item
					relative
					w-xxxxl
					rounded-md
					bg-secondary-alt-300
					"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ESkeletonKind } from "./_typings";

	const props = withDefaults(
		defineProps<{
			kind?: ESkeletonKind
		}>(),
		{
			kind: ESkeletonKind.RESULT_CARD,
		});
</script>
