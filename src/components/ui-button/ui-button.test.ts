import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import UiButton from "./ui-button.vue";

test("VButton.test.ts", () => {
	expect(UiButton).toBeTruthy();

	const container = mount(UiButton);
	expect(container).toBeTruthy();
});
