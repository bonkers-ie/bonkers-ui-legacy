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
  - [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Setup project
- Use yarn to install all dependencies with the frozen lockfile
	```js
	yarn i
	```
- To run the storybook
	```js
	yarn storybook
	```
- open [http://localhost:6006/](http://localhost:6006/)

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
	yarn build-storybook
	``` 
- Finally run:
	```js
	yarn deploy
	```
