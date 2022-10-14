import UiModal from "./ui-modal.vue";
import type { Story } from "@storybook/vue3";
import { EModalTypes } from "./_types";
import { ESize } from "../../_types/sizing";
import UiButton, { EButtonTypes } from "../ui-button";
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
		modalVisible: {
			control: { type: "boolean" },
			description: "Control Modal Visibility",
		},
		title: {
			control: { type: "text" },
			description: "The modal title text",
		},
		description: {
			control: { type: "text" },
			description: "The modal description text",
		},

	},
	args: {
		title: "Password Updated",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
		kind: EModalTypes.PRIMARY,
		icon: "",
		iconSize: ESize.LG,
		modalSize: ESize.MD,
		modalVisible: false,
	}
};

type TComponentProps = InstanceType<typeof UiModal>["$props"];

const Template: Story<TCbomponentProps> = (args) => ({
	components: { UiModal, UiButton },
	setup() {

		const state = reactive({
			modalVisible: false
		})
		const showModal = () => {
			console.log("Showing Modal");
			state.modalVisible = true;
		};
		const closeModal = () => {
			console.log("Closing Modal");
			state.modalVisible = false;
		}

		return { args, showModal, closeModal, ...toRefs(state) };
	},
	template:`
			<div>
				<ui-modal
					:kind="args.kind"
					:icon="['far', 'circle-check']"
					:iconSize="args.iconSize"
					:modalVisible.sync="modalVisible"
					:modalSize="args.modalSize"
					@closeModal="closeModal"
				>
					<template v-slot:title>
						{{args.title}}
					</template>
					<template v-slot:description>
						{{args.description}}
					</template>
				</ui-modal>

				<div class="absolute bottom-4">
				<ui-button
				@click="showModal">
				Toggle Modal
				</ui-button>
				</div>
			</div>
			`
});

export const Default = Template.bind({});
