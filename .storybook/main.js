import { mergeConfig } from "vite";

export default {
	"stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
	],
	framework: {
        name: "@storybook/vue3-vite",
        options: {}
    },
	core: {
        disableTelemetry: true
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
