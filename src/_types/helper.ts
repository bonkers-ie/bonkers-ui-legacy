import { App, Component } from "vue";
export type SFCWithInstall<T> = T & { install(app: App): void };

/**
 *
 * taken from
 * https://github.com/altai-ui/qui-max/blob/main/src/qComponents/QButton/index.ts
 * -to help with types navigation
 */
export const withInstall = <T extends Component>(
	main: T
): SFCWithInstall<T> => ({
	...main,
	install: (app: App): void => {
		app.component(main.name ?? "Unknown", main);
	}
});
