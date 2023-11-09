import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig(() => ({
	plugins: [vue()],
	resolve: {
		alias: []
	},
	test: {
		globals: true,
		environment: "jsdom"
	}
}));
