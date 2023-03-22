import { mount } from "@vue/test-utils";
import UiButton from "./ui-button.vue";

test("VButton.test.ts", () => {
	expect(UiButton).toBeTruthy();

	const container = mount(UiButton as any);
	expect(container).toBeTruthy();
});
