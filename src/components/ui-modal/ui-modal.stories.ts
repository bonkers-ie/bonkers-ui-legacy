import UiModal from "./ui-modal.vue";
import type { Story } from "@storybook/vue3";
import { EModalTypes } from "./_types";
import { ESize } from "../../_types/sizing";
import UiButton, { EButtonSizes, EButtonTypes } from "../ui-button";
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
		description: {
			control: { type: "text" },
			description: "The modal description text",
		},
		icon: {
			control: { type: "select" },
			options: ["circle-check", "face-smile" ]
		},
		iconSize: {
			control: { type: "select" },
			options: Object.values(ESize),
			description: "Icon size for modal",
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
		secondaryBtn: {
			control: { type: "select" },
			options: [null,...Object.values(EButtonTypes)],
			description: "Optionally add a secondary button to the modal, specifying button type",
		},

	},
	args: {
		title: "Password Updated",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
		kind: EModalTypes.PRIMARY,
		secondaryBtn: EButtonTypes.SECONDARY_OVERLAY ,
		icon: "circle-check",
		iconSize: ESize.XL,
		modalSize: ESize.SM,
		modalVisible: false,
	}
};

type TComponentProps = InstanceType<typeof UiModal>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiModal, UiButton },
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
		const handlePrimaryClick = () => {
			closeModal();
		};
		const handleSecondaryClick = () => {
			closeModal();
		};

		return { args, showModal, closeModal, handlePrimaryClick, handleSecondaryClick, ...toRefs(state) };
	},
	template:`
			<div>
				<ui-modal
					:kind="args.kind"
					:icon="['far', args.icon]"
					:iconSize="args.iconSize"
					:modalVisible.sync="modalVisible"
					:modalSize="args.modalSize"
					:secondaryBtn="args.secondaryBtn"
					@modal-primary-click="handlePrimaryClick"
					@modal-secondary-click="handleSecondaryClick"
				>
					<template v-slot:title>
						{{args.title}}
					</template>
					<template v-slot:description>
						{{args.description}}
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
