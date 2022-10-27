const colors = require("./src/_styles/classTypes/_colors.json");
const fontSize = require("./src/_styles/classTypes/_font-sizes.json");
const spacing = require("./src/_styles/classTypes/_spacing.json");
const boxShadow = require("./src/_styles/classTypes/_shadow.json");

module.exports = {
	darkMode: "class",
	content: ["**/*.{vue, css, js, ts}"],
	theme: {
		colors,
		spacing,
		fontSize,
		boxShadow,
		extend: {
			minHeight: (theme) => ({
				...theme("spacing"),
			}),
			minWidth: (theme) => ({
				...theme("spacing"),
			}),
		},
	},
	plugins: [],
};
