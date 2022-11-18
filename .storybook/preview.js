import {app} from '@storybook/vue3';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faFaceSmile, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faFaceSmile, faCircleCheck);

import '../src/main.css';

app.component('font-awesome-icon', FontAwesomeIcon)

export const parameters = {
	darkMode: false,
	stylePreview: true,
	actions: {argTypesRegex: "^on[A-Z].*"},
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
