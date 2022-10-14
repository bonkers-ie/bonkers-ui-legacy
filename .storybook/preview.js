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
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
