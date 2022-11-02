import UiModal from "./ui-modal.vue";
import type { Story } from "@storybook/vue3";
import { EModalTypes } from "./_types";
import { ESize } from "../../_types/sizing";
import UiButton from "../ui-button";
import UiIcon from "../ui-icon";
import UiTypography from "../ui-typography";
import { reactive, toRefs } from "vue";

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
		icon: "circle-check",
		iconSize: ESize.XL,
		modalSize: ESize.SM,
		modalVisible: false,
	}
};

type TComponentProps = InstanceType<typeof UiModal>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiModal, UiButton, UiIcon, UiTypography },
	setup() {

		const state = reactive({
			modalVisible: false
		});
		const showModal = () => {
			state.modalVisible = true;
		};
		const closeModal = () => {
			state.modalVisible = false;
		};

		return { args, showModal, closeModal, ...toRefs(state) };
	},
	template:/*html*/`
			<div>
				<ui-modal
					:kind="args.kind"
					:title="args.title"
					:modalVisible.sync="modalVisible"
					:modalSize="args.modalSize"
					@closeModal="closeModal"
				>
					<template #icon>
						<ui-icon  :icon-name="['far', args.icon]" :size="args.iconSize"  />
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
					<ui-button
					@click="showModal">
					Toggle Modal
					</ui-button>
				</div>
			</div>
			`
});

export const Default = Template.bind({});
