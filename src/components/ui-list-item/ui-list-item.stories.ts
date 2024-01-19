import { UiListItem } from "../ui-list-item";
import { EListItemSize, EListItemSpacing, EListItemTypes } from "./_types";
import { ICON_DEFAULT } from "./../../CONSTANTS";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-list-item",
	component: UiListItem,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EListItemTypes),
			description: "The Element kind",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EListItemSize),
			description: "The Element size"
		},
		spacing: {
			control: {
				type: "select"
			},
			options: Object.values(EListItemSpacing),
			description: "The Element spacing"
		},
		title: {
			control: {
				type: "text"
			},
			description: "The Element title"
		},
		default: {
			control: {
				type: "text"
			},
			description: "The slot text or component",
		},
	},
	args: {
		title: "default text",
		kind: EListItemTypes.DEFAULT,
		size: EListItemSize.SM,
		spacing: EListItemSpacing.DEFAULT,
		default: "default slot"
	},
} satisfies Meta<typeof UiListItem>;

export const Default = {
	render: (args) => ({
		components: {
			UiListItem
		},
		setup() {
			return {
				args,
				ICON_DEFAULT
			};
		},
		template: /*html*/`
				<ul>
					<ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" icon-class="text-secondary-alt" />

					<ui-list-item :icon="ICON_DEFAULT" :kind="args.kind" :spacing="args.spacing">
						text only
					</ui-list-item>

					<ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
						{{ args.default }}
					</ui-list-item>

					<ui-list-item v-bind="args" icon-class="text-secondary-alt" :icon="ICON_DEFAULT" />
				</ul>
		`,
	})
};
