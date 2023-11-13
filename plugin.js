const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ config, variants, e, addUtilities }) => {

	const boxShadow = config("theme.boxShadow");
	const colors = config("theme.colors");
	const spacing = config("theme.spacing");
	const fontSize = config("theme.fontSize");

	const boxShadowUtilities = Object.keys(boxShadow).map(key => ({
		[`.${e(`shadow-${key}`)}`]: {
			boxShadow: boxShadow[key],
		},
	}));

	const colorUtilities = Object.keys(colors).map(key => ({
		[`.${e(`color-${key}`)}`]: {
			color: colors[key],
		},
	}));

	const backgroundColorUtilities = Object.keys(colors).map(key => ({
		[`.${e(`bg-${key}`)}`]: {
			backgroundColor: colors[key],
		},
	}));

	const borderColorUtilities = Object.keys(colors).map(key => ({
		[`.${e(`border-${key}`)}`]: {
			borderColor: colors[key],
		},
	}));

	const spacingUtilities = Object.keys(spacing).map(key => ({
		[`.${e(`spacing-${key}`)}`]: {
			padding: spacing[key],
			margin: spacing[key],
		},
	}));

	const fontSizeUtilities = Object.keys(fontSize).map(key => ({
		[`.${e(`text-${key}`)}`]: {
			fontSize: fontSize[key],
		},
	}));

	addUtilities(boxShadowUtilities, variants("boxShadow"));
	addUtilities(colorUtilities, variants("colors"));
	addUtilities(backgroundColorUtilities, variants("backgroundColor"));
	addUtilities(borderColorUtilities, variants("borderColor"));
	addUtilities(spacingUtilities, variants("spacing"));
	addUtilities(fontSizeUtilities, variants("fontSize"));

});
