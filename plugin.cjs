const plugin = require("tailwindcss/plugin");

const BonkersUiConfig = require("./tailwind.config");

module.exports = plugin(({ addBase, theme }) => {
	addBase(BonkersUiConfig);
});
