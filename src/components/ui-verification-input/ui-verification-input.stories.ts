import UiVerificationInput from "./ui-verification-input.vue";
import { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-verification-input",
	component: UiVerificationInput,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		classes: {
			control: { type: "text" },
			description: "Inputs custom classes",
		},
		inputsCount: {
			control: { type: "number" },
			description: "Number of inputs",
			defaultValue: 4,
		},
		type: {
			control: { type: "select" },
			options: ["text"],
			description: "Inputs type",
			defaultValue: "text"
		},
	},
}

type MyComponentProps = InstanceType<typeof UiVerificationInput>["$props"];

const Template: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiVerificationInput
	},
	setup() {
		const filedHandler = (payload: string)=>{
			console.log("=--->",payload);
		}
		return { args, filedHandler };
	},
	template: `
		<ui-verification-input @onFiled="filedHandler" :classes="args.classes" :inputsCount="args.inputsCount" :type="args.type"/>
	`
});

export const Default = Template.bind({});
