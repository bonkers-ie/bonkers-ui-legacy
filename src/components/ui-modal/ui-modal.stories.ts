import type { Story } from "@storybook/vue3";
import UiModal from "./ui-modal.vue";
import UiButton from "../ui-button";
import UiBackdrop from "./ui-backdrop";
import UiIcon from "../ui-icon";
import UiTypography from "../ui-typography";
import { ESize } from "../../_types/sizing";
import { EModalSizes } from "./_typings";

export default {
	title: "Components/ui-modal",
	component: UiModal,
	argTypes: {
		title: {
			control: { type: "text" },
			description: "The modal title text",
		},
		modalSize: {
			control: { type: "select" },
			options: Object.values(EModalSizes),
			description: "The modal kinds",
		},
		modalVisible: {
			control: { type: "boolean" },
			description: "Control Modal Visibility",
		},

	},
	args: {
		title: "Password Updated",
		body: "You can now use your new security info to sign in to your account",
		modalSize: ESize.SM,
	}
};

type TComponentProps = InstanceType<typeof UiModal>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiModal, UiBackdrop, UiButton, UiIcon, UiTypography },
	setup() {
		return { args, ESize };
	},
	template:/*html*/`
			<ui-modal
					:title="args.title"
					:modalSize="args.modalSize"
				>
					<template #icon>
						<ui-icon class="text-primary"  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
					</template>

					<template #default>
						{{args.body}}
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
});

export const Default = Template.bind({});
