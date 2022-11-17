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
        <ui-result-card-range v-bind="args" :icon-name="['far', 'fa-face-smile']"/>
    `,
});

const TemplateAll = (args) => ({
	components: { UiResultCardRange },
	setup() {
		return { args };
	},
	template:/*html*/`
    <div class="ui-result-card-range grid grid-rows-2 gap-sm w-full">
        <UiResultCardRange v-bind="args" :title="title" :icon-name="['far', 'fa-face-smile']"/>
        <UiResultCardRange />
        <UiResultCardRange />
    </div>
    `,
});

export const Default = Template.bind({});

export const FullCard = TemplateAll.bind({});
