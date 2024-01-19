import { UiSkeleton } from "../ui-skeleton";
import type { Meta } from "@storybook/vue3";
import { ESkeletonKind } from "./_typings";

export default {
	title: "Components/ui-skeleton",
	component: UiSkeleton,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(ESkeletonKind),
			description: "The skeleton kind",
		}
	},
	args: {
		kind: ESkeletonKind.RESULT_CARD
	},
	render: (args) => ({
		components: {
			UiSkeleton
		},
		setup() {
			return {
				args
			};
		},
		template: /*html*/`
			<ui-skeleton v-bind="args" />
		`,
		args: {
			kind: ESkeletonKind.RESULT_CARD
		},
	})
} satisfies Meta<typeof UiSkeleton>;

export const Default = {};
