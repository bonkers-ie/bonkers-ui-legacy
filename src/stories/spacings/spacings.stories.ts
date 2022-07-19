import UiSpacings from "./ui-spacings.vue";

export default {
	title: "Example/Spacings",
	component: UiSpacings,
};

const Template = () => ({
	components: { UiSpacings },
	template: `<ui-spacings/>`,
});

export const Spacings = Template();
