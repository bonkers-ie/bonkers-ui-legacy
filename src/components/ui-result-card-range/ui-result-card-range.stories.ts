import UiResultCardRange from "../ui-result-card-range";

export default {
	title: "Components/ui-result-card-range",
	component: UiResultCardRange,
	argTypes: {
		slot: {
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
		},
	},
	args: {
		title: "This is a Title",
		slot: "This is the body",
	},
};

const Template = (args) => ({
	components: {
		UiResultCardRange 
	},
	setup() {
		return {
			args 
		};
	},
	template: /*html*/`
		<ui-result-card-range :icon-name="['far', 'face-smile']" :title="args.title">
			{{args.slot}}
		</ui-result-card-range>
    `,
});

const TemplateAll = (args) => ({
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
		 	:icon-name="['far', 'face-smile']" :title="args.title">
			{{args.slot}}
		</ui-result-card-range>

		<ui-result-card-range style="grid-column: 2 / 2"
			 :icon-name="['far', 'face-smile']" :title="args.title">
			 {{args.slot}}

		</ui-result-card-range>

		<ui-result-card-range style="grid-column: 1 / 3; flex-direction: row; justify-content: space-between;">

				<b>25/02/2022</b>
				<b>→</b>
				<b>26/01/2023</b>

		</ui-result-card-range>
	</div>
    `,
});

export const SingleCard = Template.bind({});

export const FullCard = TemplateAll.bind({});
