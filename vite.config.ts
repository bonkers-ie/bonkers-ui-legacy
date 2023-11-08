import { defineConfig, UserConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";
import type { InlineConfig } from "vitest";
import fg from "fast-glob";
import { viteStaticCopy } from "vite-plugin-static-copy";

const componentEntries = fg.sync(path.resolve(__dirname, "src/components", "**", "index.ts"));

const entries = Object.fromEntries(
	componentEntries.map((filePath: string) => {
		const componentName = path.basename(path.dirname(filePath));
		return [componentName, filePath];
	})
);

entries["index"] = path.resolve(__dirname, "src", "index.ts");

const resolvePath = (str: string) => path.resolve(__dirname, str);

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

export default defineConfig({
	resolve: {
		alias: {
			"@*": path.resolve(__dirname, "src"),
		}
	},
	plugins: [
		vue(),
		dts(),
		// cssInjectedByJsPlugin(),
		// tsconfigPaths(),
		viteStaticCopy({
			targets: [
				{
					src: resolvePath("./src/_styles"),
					dest: "./",
				},
				{
					src: path.resolve(__dirname, "./src/_types"),
					dest: "./",
				},
				{
					src: path.resolve(__dirname, "./postcss.config.cjs"),
					dest: "./",
				},
				{
					src: path.resolve(__dirname, "./.plugin.js"),
					dest: "./",
				}
				// {
				// 	src: path.resolve(__dirname, "./tailwind.config.js"),
				// 	dest: "./",
				// }
			],
		}),
	],
	test: {
		globals: true,
		environment: "jsdom",
	},
	build: {
		target: "esnext",
		lib: {
			entry: path.resolve(__dirname, "src", "index.ts"),
			name: "bonkers-ui",
			formats: ["es", "cjs"],
			fileName: (format, entryAlias) => {
				if (format === "es") {
					return `${entryAlias}.js`;
				} else {
					return `${entryAlias}.min.js`;
				}
			}

		},
		rollupOptions: {
			external: ["vue", "tailwindcss"],
			output: {
				preserveModules: true,
				// inlineDynamicImports: false,
				exports: "named",
				globals: {
					vue: "Vue",
				},

			},

		},
		emptyOutDir: true,
	}
});
// } as VitestConfigExport);
