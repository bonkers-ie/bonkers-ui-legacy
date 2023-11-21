import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig({
	resolve: {
		alias: {
			"@*": path.resolve(__dirname, "src"),
		}
	},
	plugins: [
		dts({
			staticImport: true,
			insertTypesEntry: true,
			include: ["src/**/*.ts", "src/**/*.vue"],
			exclude: ["src/**/*.test.ts", "src/**/*.stories.ts", "src/_types/*"]
		}),
		vue()
	],

	build: {
		sourcemap: true,
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
