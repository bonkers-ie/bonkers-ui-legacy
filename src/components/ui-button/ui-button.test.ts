import { mount } from "@vue/test-utils";
import UiButton from "./ui-button.vue";
import { test, expect } from "vitest";

test("VButton.test.ts", async () => {
	expect(UiButton).toBeTruthy();

	it("renders props.msg when passed", () => {
		const className = "message";
		const wrapper = mount(UiButton, {
			propsData: {
				class: className
			}
		});

		expect(wrapper.classes()).toContain(className);
	});

});
