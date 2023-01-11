
import { defineConfig, UserConfig } from "vite";
import type { InlineConfig } from "vitest";

import Vue from "@vitejs/plugin-vue";

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

export default defineConfig({
	plugins: [Vue()],
	test: {
		globals: true,
		environment: "jsdom",
	},
} as VitestConfigExport);
