module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': 0,
		'indent': ['error', 'tab', { SwitchCase: 1 }],

		'vue/prop-name-casing': ['error', 'camelCase'],
		'vue/this-in-template': ['error', 'never'],
		'vue/order-in-components': [
			'error',
			{
				order: [
					'el',
					'name',
					'key',
					'parent',
					'functional',
					['delimiters', 'comments'],
					['components', 'directives', 'filters'],
					'extends',
					'mixins',
					['provide', 'inject'],
					'ROUTER_GUARDS',
					'layout',
					'middleware',
					'validate',
					'scrollToTop',
					'transition',
					'loading',
					'inheritAttrs',
					'model',
					['props', 'propsData'],
					'emits',
					'setup',
					'asyncData',
					'data',
					'fetch',
					'head',
					'computed',
					'watch',
					'watchQuery',
					'LIFECYCLE_HOOKS',
					'methods',
					['template', 'render'],
					'renderError'
				]
			}
		],
		'vue/require-prop-types': 2,
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/script-indent': [
			'error',
			'tab',
			{
				baseIndent: 0,
				switchCase: 1,
				ignores: []
			}
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 1,
				multiline: {
					max: 1,
					allowFirstLine: true
				}
			}
		]
	}
};
