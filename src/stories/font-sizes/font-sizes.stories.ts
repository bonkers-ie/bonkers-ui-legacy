import UiFontSizes from "./ui-font-sizes.vue";

export default {
	title: "Example/FontSizes",
	component: UiFontSizes,
};

const Template = () => ({
	components: {
		UiFontSizes 
	},
	template: `<ui-font-sizes/>`,
});

export const FontSizes = Template();
