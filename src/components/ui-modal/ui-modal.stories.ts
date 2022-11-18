import { ref } from "vue";
import type { Story } from "@storybook/vue3";
import UiModal from "./ui-modal.vue";
import UiButton from "../ui-button";
import UiBackdrop from "../ui-backdrop";
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
			<transition
				name="ui-modal"
				mode="out-in"
				appear
				enter-active-class="transition delay-100"
				enter-from-class="opacity-0 translate-y-1/4"
				enter-to-class="opacity-100 translate-y-0"
				leave-active-class="transition"
				leave-to-class="opacity-0 translate-y-1/4"
				leave-from-class="opacity-100 translate-y-0"
			>
				<ui-modal
					v-if="isVisible"
					:title="args.title"
					:modalSize="args.modalSize"
					:closeModal="closeModal"
				>
					<template #icon>
						<ui-icon class="text-primary"  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
					</template>
					<template #title>
						<ui-typography class="text-2xl font-bold">{{ args.title }}</ui-typography>
					</template>

					<template #default >
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
			</transition>

			<ui-backdrop v-if="isVisible" />

			<div class="absolute" style="top: calc(50vh - 2rem); left: calc(50vw - 4rem)">
				<ui-button @click="showModal">
					Toggle Modal
				</ui-button>
			</div>
			`
});

export const Default = Template.bind({});
