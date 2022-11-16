import UiResultCardRange from "../ui-result-card-range";

export default {
	title: "Components/ui-result-card-range",
	component: UiResultCardRange,
	argTypes: {},
	args: {},
};

const Template = (args) => ({
	components: { UiResultCardRange },
	setup() {
		return { args };
	},
	template:/*html*/`
        <ui-result-card-range v-bind="args" />
    `,
});

export const Default = Template.bind({});

export const Ranged = Template.bind({});
export const Double = Template.bind({});
