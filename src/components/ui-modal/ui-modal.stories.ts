import type { Meta } from "@storybook/vue3";
import { UiModal } from "../ui-modal";
import { UiButton } from "../ui-button";
import { UiBackdrop } from "./ui-backdrop";
import { UiIcon } from "../ui-icon";
import { UiTypography } from "../ui-typography";
import { ESize } from "../../_types/sizing";
import { EModalSizes } from "./_typings";

export default {
	title: "Components/ui-modal",
	component: UiModal,
	argTypes: {
		title: {
			control: {
				type: "text"
			},
			description: "The modal title text",
		},
		modalSize: {
			control: {
				type: "select"
			},
			options: Object.values(EModalSizes),
			description: "The modal kinds",
		},
		default: {
			control: {
				type: "text"
			},
			description: "The modal body text",
		},
	},
	args: {
		title: "Password Updated",
		default: "You can now use your new security info to sign in to your account",
		modalSize: EModalSizes.SM,
	}
} satisfies Meta<typeof UiModal>;

export const Default = {
	render: (args) => ({
		components: {
			UiModal,
			UiBackdrop,
			UiButton,
			UiIcon,
			UiTypography
		},
		setup() {
			return {
				args,
				ESize
			};
		},
		template: /*html*/`
				<ui-modal
						class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						:title="args.title"
						:modalSize="args.modalSize"
					>
						<template #icon>
							<ui-icon class="text-primary"  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
						</template>

						<template #default>
							{{args.default}}
						</template>

						<template #footer>
							<ui-button
								fullWidth
							>
								Ok
							</ui-button>
						</template>
				</ui-modal>

				<ui-backdrop />
				`
	})
};
