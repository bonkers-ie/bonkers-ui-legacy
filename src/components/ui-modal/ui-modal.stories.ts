import UiModal from "./ui-modal.vue";
import type { Story } from "@storybook/vue3";
import { EModalTypes } from "./_types";
import { ESize } from "../../_types/sizing";
import UiButton from "../ui-button";
import UiIcon from "../ui-icon";
import UiTypography from "../ui-typography";
import { ref } from "vue";

export default {
	title: "Components/ui-modal",
	component: UiModal,
	argTypes: {
		kind: {
			control: { type: "select" },
			options: Object.values(EModalTypes),
			description: "The modal kinds",
		},
		title: {
			control: { type: "text" },
			description: "The modal title text",
		},
		modalSize: {
			control: { type: "select" },
			options: Object.values(ESize),
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
		kind: EModalTypes.PRIMARY,
		modalSize: ESize.SM,
	}
};

type TComponentProps = InstanceType<typeof UiModal>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiModal, UiButton, UiIcon, UiTypography },
	setup() {
		const isVisible = ref(false);

		const showModal = () => {
			isVisible.value = true;
		};

		const closeModal = () => {
			isVisible.value = false;
		};

		return { args, showModal, closeModal, isVisible, ESize };
	},
	template:/*html*/`

				<ui-modal
					:kind="args.kind"
					:title="args.title"
					:modalVisible="isVisible"
					:modalSize="args.modalSize"
					:closeModal="closeModal"
				>
					<template #icon>
						<ui-icon  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
					</template>
					<template #title>
						<ui-typography class="text-2xl font-bold">{{ args.title }}</ui-typography>
					</template>

					<template #body>
						{{args.body}}
					</template>
					<template #footer>
						<ui-button
							fullWidth
							@click="closeModal"
						>
							Ok
						</ui-button>
						</template>
				</ui-modal>

				<div class="absolute" style="top: calc(50vh - 2rem); left: calc(50vw - 4rem)">

					<ui-button @click="showModal">
					Toggle Modal
					</ui-button>
				</div>
			`
});

export const Default = Template.bind({});
Default.parameters = {
	backgrounds: {
		default: "Bonkers",
		values: [
			{
				name: "Bonkers",
				value: "url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)",
			},
		],
	},
	layout: "padded",
};
