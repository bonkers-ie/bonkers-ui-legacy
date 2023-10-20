import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@/": new URL("./src/", import.meta.url).pathname,
		}
	},
	plugins: [
		vue({
			reactivityTransform: true
		}),
		dts({
			insertTypesEntry: true,
		}),
		// cssInjectedByJsPlugin()
	],

	build: {
		target: "esnext",
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "bonkers-ui",
			fileName: (format) => `bonkers-ui.${format}.js`
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	}
});
