const {mergeConfig} = require('vite');

module.exports = {
	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss")
				}
			}
		},
		'storybook-tailwind-dark-mode',
	],
	"framework": "@storybook/vue3",
	"core": {
		"builder": "@storybook/builder-vite"
	},
	async viteFinal(config, {configType}) {
		// return the customized config
		return mergeConfig(config, {
			base: "https://bonkers-ie.github.io/bonkers-ui/",
		});
	},
}
