import type { Meta } from "@storybook/vue3";
import { UiResultCardRange } from "../ui-result-card-range";

export default {
	title: "Components/ui-result-card-range",
	component: UiResultCardRange,
	argTypes: {
		default: {
			control: {
				type: "text"
			},
			description: "The slot text or component",
		},
		title: {
			control: {
				type: "text"
			},
			description: "The title text",
		}
	},
	args: {
		title: "This is a Title",
		default: "This is the body",
	},
} satisfies Meta<typeof UiResultCardRange>;

export const SingleCard = {
	args: {
		iconName: ["far", "face-smile"]
	}
};

export const FullCard = {
	render: (args) => ({
		components: {
			UiResultCardRange
		},
		setup() {
			return {
				args
			};
		},
		template: /*html*/`
		<div class="ui-result-card-range grid gap-sm w-full">

			<ui-result-card-range style="grid-column: 1 / 1"
				v-bind="args"
				 :icon-name="['far', 'face-smile']" :title="args.title">
				{{args.default}}
			</ui-result-card-range>

			<ui-result-card-range style="grid-column: 2 / 2"
				v-bind="args"
				 :icon-name="['far', 'face-smile']" :title="args.title">
				 {{args.default}}

			</ui-result-card-range>

			<ui-result-card-range v-bind="args"
				style="grid-column: 1 / 3; flex-direction: row; justify-content: space-between;">

					<b>25/02/2022</b>
					<b>→</b>
					<b>26/01/2023</b>

			</ui-result-card-range>
		</div>
		`,
	})
};
