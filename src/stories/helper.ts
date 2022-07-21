export const getCssVariableValue = (variable:string) => {
	const cssVariable = variable.match(/\((.*)\)/)?.pop() || "";

	return getComputedStyle(window.document.body).getPropertyValue(cssVariable);
};
