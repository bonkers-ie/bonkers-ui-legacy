import colors from "./src/_styles/classTypes/_colors.json";
import fontSize from "./src/_styles/classTypes/_font-sizes.json";
import spacing from "./src/_styles/classTypes/_spacing.json";
import boxShadow from "./src/_styles/classTypes/_shadow.json";

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
			maxHeight: (theme) => ({
				...theme("spacing"),
			}),
			maxWidth: (theme) => ({
				...theme("spacing"),
			}),
		},
	},
	plugins: []
};
