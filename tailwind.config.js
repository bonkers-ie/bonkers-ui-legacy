const colors = require("./src/_colors.json");
const fontSize = require("./src/_font-sizes.json");
const spacing = require("./src/_spacing.json");
const boxShadow = require("./src/_shadow.json");

module.exports = {
	darkMode: "class",
	content: ["**/*.{vue, css, js, ts}"],
	theme: {
		colors,
		spacing,
		fontSize,
		boxShadow,
		extend: {},
	},
	plugins: [],
};
