<h1 align="center">Bonkers-UI Design System</h1>  

<br/>

<div align="center" style="display:flex; flex-direction: column;">
	<a href="https://bonkers-ie.github.io/bonkers-ui" target="_blank">
		<img width="300" src="https://web-assets.bonkers.ie/packs/static/logo/bonkers_logo-279f0cff5a9b71e3059a.svg">
	</a>

<h4>The Bonkers-UI design system used internally for consistent styling across platforms</h3>

<br/>
<br/>

<div align="center">
	<a href="https://bonkers-ie.github.io/bonkers-ui/"  target="_blank">  
		<img alt="Bonkers storybook" src="https://img.shields.io/badge/Bonkers-UI-green.svg?logo=storybook" />  
	</a>
	<img src="https://img.shields.io/npm/v/bonkers-ui?color=green">
	<img src="https://img.shields.io/npm/l/bonkers-ui">
	<img src="https://img.shields.io/npm/dw/bonkers-ui">
	<img src="https://img.badgesize.io/https:/unpkg.com/bonkers-ui/?label=Brotli%20size%3A%20JS&compression=brotli">
</div>
</div>

  
    
## Recommended IDE Setup
- [Webstorm](https://www.jetbrains.com/webstorm/)
- [VS Code](https://code.visualstudio.com/)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [Volar-ts](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
  - [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
  - [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
## Setup project
- Use bun to install all dependencies with the frozen lockfile

	```js
	bun i
	```
- To run the storybook

	```js
	bun storybook
	```
- open [http://localhost:6006/](http://localhost:6006/)

## For use in a consuming project
- Install the component library with your desired package manager.
	- Insure `autoprefixer`, `postcss` and `tailwindcss` are installed

- In your `tailwind.config.js`, add the Bonkers-UI tailwind plugin to your `plugins` array

```js
import bonkersUiConfig from "bonkers-ui/plugin";

export default {
	plugins: [ bonkersUiConfig ],	
}
```

- Ensure that the tailwind directives are included in your `main.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Bonkers-UI has been successfully installed to your project, now import any components you need!
```vue
<template>
	<div>
		<ui-button 
			:size="EButtonSizes.LARGE" 
			:kind="EButtonTypes.PRIMARY"
			>
			I'm a Bonkers Button
		</ui-button>

		<ui-input
			:kinds="EInputKinds.PRIMARY"
			placeholder="Placeholder"
			full-width
			class="mb-md"
			heading="Heading"
			sub-label="Sub Label"
		/>	
	</div>
</template>

<script setup lang="ts">
	import { UiButton, EButtonTypes, EButtonSizes } from "bonkers-ui";
	import UiInput from "bonkers-ui/ui-input"; // Deprecated Import Method
	import { EInputKinds } from "bonkers-ui/_types";
</script>
```

## Flow to develop
- We use only <b>develop</b> to create new branch
- First pull all changes and before creating a new branch
- Preferred naming of branches
  - `feature/[feature-name]`
  - `hotfix/[fix-name]`
- Preferred commit message
  - `update([file[s]-name]): [message]` for example - `update(main.css, header.vue): change header to .header`
  - `fix([file[s]-name]): [message]`
  - `add([file[s]-name]): [message]`
- When you are ready to push just `merge`(not `rebase`) develop into the current branch 
- Fix any merge conflicts that this creates
- Next create pull request to develop (you can squash multiple commits when merging)
- After the pull request is merged to develop you can see it in staging [https://bonkers-ie.github.io/bonkers-ui](https://bonkers-ie.github.io/bonkers-ui/?path=/docs/example-introduction--docs)
- Only after test staging you can create a merge request from `develop` to `master`
- After you merge to master, the patch version will upgrade x.x.^x and you can use this version in package

## Flow to deploy to github
- To deploy to github-pages use:
	```js
	bun build-storybook
	``` 
- Finally run:
	```js
	bun deploy
	```
