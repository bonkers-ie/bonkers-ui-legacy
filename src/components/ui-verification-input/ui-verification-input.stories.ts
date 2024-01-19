import UiVerificationInput from "./ui-verification-input.vue";
import type { Meta } from "@storybook/vue3";

export default {
	title: "Components/ui-verification-input",
	component: UiVerificationInput,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		inputsCount: {
			control: {
				type: "number"
			},
			description: "Number of inputs",
		},
		type: {
			control: {
				type: "select"
			},
			options: ["text"],
			description: "Inputs type",
		},
	},
	args: {
		inputsCount: 4,
		type: "text"
	}
} satisfies Meta<typeof UiVerificationInput>;

export const Default = {
	render: (args)=>({
		components: {
			UiVerificationInput
		},
		setup() {
			const filedHandler = (payload: string)=>{
				console.log("=--->",payload);
			};
			return {
				args,
				filedHandler
			};
		},
		template: `
			<ui-verification-input @onFiled="filedHandler" :className="args.className" :inputsCount="args.inputsCount" :type="args.type"/>
		`
	})
};
