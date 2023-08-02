import type { Meta } from "@storybook/vue3";

import { EBerSize } from "./_types";
import UiBerRank from "../ui-ber-rank";

export default {
	title: "Components/ui-ber-rank",
	component: UiBerRank,
	argTypes: {
		rank: {
			control: {
				type: "number" 
			},
			description: "The Element rank from 0 to 15",
		},
		size: {
			control: {
				type: "select" 
			},
			options: Object.values(EBerSize),
			description: "The size of the rank",
		}
	},
	args: {
		rank: 0,
	},
}satisfies Meta<typeof UiBerRank>;

export const Default = {};
