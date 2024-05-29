import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
	resolve: {
		alias: {
			"@*": path.resolve(__dirname, "src"),
		}
	},

	assetsInclude: ["/sb-preview/runtime.js"],

	plugins: [
		cssInjectedByJsPlugin({
			relativeCSSInjection: true,
		}),
		dts({
			staticImport: true,
			insertTypesEntry: true,
			include: ["src/**/*.ts", "src/**/*.vue"],
			exclude: ["**/*.test.ts", "**/*.stories.ts"]
		}),
		vue()
	],

	build: {
		sourcemap: true,
		cssCodeSplit: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "bonkersUi"
		},
		rollupOptions: {
			external: ["vue", "tailwindcss"],
			treeshake: true,
			output: [
				{
					format: "umd",
					name: "bonkersUi",
					exports: "named",
					globals: {
						vue: "Vue"
					},
				},
				{
					format: "es",
					entryFileNames: "[name].js",
					preserveModules: true,
				},
			],

		},
		emptyOutDir: true,
	}
});
