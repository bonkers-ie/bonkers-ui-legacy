import { defineConfig, UserConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
	test: InlineConfig;
}

export default defineConfig({
	resolve: {
		alias: {
			"@*": path.resolve(__dirname, "src/*"),
		}
	},
	plugins: [
		vue(),
		dts(),
		cssInjectedByJsPlugin(),
		tsconfigPaths(),
	],
	test: {
		globals: true,
		environment: "jsdom",
	},
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
		sourcemap: true,
		emptyOutDir: true,
	}
});
// } as VitestConfigExport);
