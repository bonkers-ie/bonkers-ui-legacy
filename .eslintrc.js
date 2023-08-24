module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"plugin:storybook/recommended",
		"plugin:tailwindcss/recommended"
	],
	parserOptions: {
		ecmaVersion: 2021,
	},
	parser: "vue-eslint-parser",
	plugins: [
		"tailwindcss",
		"eslint-plugin-storybook"
	],
	overrides: [
		{
			files: ["*.vue"],
			rules: {
				indent: "off",
			},
		},
	],
	rules: {
		"@typescript-eslint/indent": ["error", "tab"],
		indent: [
			"error",
			"tab",
			{
				VariableDeclarator: "first",
				MemberExpression: 1,
				ObjectExpression: 1,
			},
		],
		"vue/html-indent": [
			"error",
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
			},
		],
		"vue/script-indent": [
			"error",
			"tab",
			{
				baseIndent: 1,
				switchCase: 1,
			},
		],
		"eol-last": ["error", "always"],
		"no-console": "warn",
		"no-debugger": "warn",
		"vue/multi-word-component-names": 0,
		"object-curly-spacing": ["error", "always"],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 0,
			},
		],
		semi: ["error", "always"],
		"max-len": ["error", {
			"code": 120,
			"tabWidth": 4,
			"ignoreStrings": true,
			"ignoreTemplateLiterals": true,
			"ignoreRegExpLiterals": true,
			"ignoreUrls": true,
			"ignoreComments": true,
			"ignoreTrailingComments": true,
			ignorePattern: 'd="([\\s\\S]*?)"',
		}],
		"tailwindcss/no-custom-classname": "off",
		"object-curly-newline": ["error", {
			"ObjectExpression": {
				"multiline": true,
				"minProperties": 1,
			},
			"ImportDeclaration": {
				"multiline": true,
				"minProperties": 5,
			}
		}],
		"object-property-newline": "error",
		"space-before-blocks": ["error", "always"],
		"keyword-spacing": "error",
		"key-spacing": "error"
	},
};
