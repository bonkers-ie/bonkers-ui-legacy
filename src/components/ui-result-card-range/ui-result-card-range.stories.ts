import UiResultCardRange from "../ui-result-card-range";

export default {
	title: "Components/ui-result-card-range",
	component: UiResultCardRange,
	argTypes: {},
	args: {
		title: "This is a Title",
		body: "This is the body",
		kind: UiResultCardRange.DEFAULT,
	},
};

const Template = (args) => ({
	components: { UiResultCardRange },
	setup() {
		return { args };
	},
	template:/*html*/`
        <ui-result-card-range :icon-name="['far', 'fa-face-smile']">
		</ui-result-card-range>
    `,
});

const TemplateAll = (args) => ({
	components: { UiResultCardRange },
	setup() {
		return { args };
	},
	template:/*html*/`
    <div class="ui-result-card-range grid grid-flow-row grid-cols-2 grid-rows-1 gap-sm w-full">
	<ui-result-card-range :icon-name="['far', 'fa-face-smile']" title="Hello World" body="Hello Body">
	</ui-result-card-range>
    </div>
    `,
});

export const Default = Template.bind({
	
});

export const FullCard = TemplateAll.bind({});
