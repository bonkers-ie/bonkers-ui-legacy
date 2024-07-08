import UiFeaturedCard from "./ui-featured-card.vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-featured-card",
	component: UiFeaturedCard,
	argTypes: {
		title: {
			control: {
				type: "text"
			}
		},
		price: {
			control: {
				type: "text"
			}
		},
		description: {
			control: {
				type: "text"
			}
		},
		specialOffer: {
			control: {
				type: "boolean"
			}
		}
	},
	args: {
		title: "Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline",
		price: "€77.00*",
		description: "monthly",
		specialOffer: false
	}
} satisfies Meta<typeof UiFeaturedCard>;

export const Default = {
	args: {}
};
