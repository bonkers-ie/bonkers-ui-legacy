import { mount, } from "@vue/test-utils";
import UiButton from "./ui-button.vue";

describe("VButton.test.ts", () => {
	it("renders props.msg when passed", () => {
		const className = "message";
		const wrapper = mount(UiButton, {
			props: { className },
		});

		expect(wrapper.classes()).toContain(className);
	},);
},);
