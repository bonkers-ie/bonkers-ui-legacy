
import { defineConfig, UserConfig } from "vite";
import type { InlineConfig } from "vitest";

import vue from "@vitejs/plugin-vue";

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: "jsdom",
	},
} as VitestConfigExport);
