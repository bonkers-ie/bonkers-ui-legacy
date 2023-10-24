import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@*": path.resolve(__dirname, "src/*"),
			"@/types": path.resolve(__dirname, "src/_types.ts"),
		}
	},
	plugins: [
		vue(),
		dts(),
		cssInjectedByJsPlugin()
	],

	build: {
		target: "esnext",
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "bonkers-ui",
			fileName: (format) => `bonkers-ui.${format}.js`
		},
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "src/index.ts")
			},
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
				},
			},
		},
		emptyOutDir: false,
	}
});
