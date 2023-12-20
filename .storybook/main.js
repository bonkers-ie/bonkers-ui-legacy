import { mergeConfig } from "vite";

export default {
	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
	],
	framework: {
		name: "@storybook/vue3-vite",
	},
	core: {
		builder: '@storybook/builder-vite', // or '@storybook/builder-webpack5'
		disableTelemetry: true,
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			base: "https://bonkers-ie.github.io/bonkers-ui/",
		});
	},
	docs: {
		autodocs: true
	}
};
