module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'prettier',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	plugins: [
		'eslint-plugin-vue',
	],
	rules: {
		"max-len": 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		quotes: 0,
		'linebreak-style': 0,
		"vuejs-accessibility/no-autofocus": "off",
		"vuejs-accessibility/no-mouse": "off",
	},
}
