import { setup } from '@storybook/vue3'
import { createRouter, createWebHashHistory } from 'vue-router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faFaceSmile, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faFaceSmile, faCircleCheck);

import '../src/main.css';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [],
})

setup((app) => {
	app.use(router)
	app.component('font-awesome-icon', FontAwesomeIcon)
})


export const parameters = {
	darkMode: {
		stylePreview: true,
		dark: {
			appBg: '#202124',
			appContentBg: '#303134',
			barBg: '#161616',
			barSelectedColor: '#56c55d',
			barTextColor: '#56c55d',
			inputBg: '#161616',
			inputBorder: '#303134',
			inputTextColor: '#56c55d',
			textColor: '#ccc',
		}
	},
	stylePreview: true,
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "Bonkers",
		values: [
			{
				name: "Bonkers",
				value: "url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)",
			},
			{
				name: "Light",
				value: "#ffffff"
			},
			{
				name: "Dark",
				value: "#202124"
			}
		],
	},
	layout: "padded",
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
