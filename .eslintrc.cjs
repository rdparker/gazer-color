module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:n/recommended',
		'plugin:unicorn/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'import',
		'n',
		'unicorn',
	],
	rules: {
		'import/first': 'error',
		'import/newline-after-import': [
			'error',
			{
				// TODO: Buggy.
				// considerComments: true,
			},
		],
		'import/no-anonymous-default-export': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'parent',
					'sibling',
					'index',
				],
				'newlines-between': 'never',
				warnOnUnassignedImports: true,
			},
		],
		'n/no-unpublished-import': 'off',
		'n/prefer-global/process': ['error', 'never'],
		'unicorn/consistent-destructuring': 'off',
		'unicorn/no-null': 'off',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				checkFilenames: false,
				checkDefaultAndNamespaceImports: false,
				checkShorthandImports: false,
				extendDefaultReplacements: false,
				replacements: {
					// https://thenextweb.com/dd/2020/07/13/linux-kernel-will-no-longer-use-terms-blacklist-and-slave/
					whitelist: {
						include: true,
					},
					blacklist: {
						exclude: true,
					},
					master: {
						main: true,
					},
					slave: {
						secondary: true,
					},

					// Not part of `eslint-plugin-unicorn`
					application: {
						app: true,
					},
					applications: {
						apps: true,
					},

					// Part of `eslint-plugin-unicorn`
					arr: {
						array: true,
					},
					e: {
						error: true,
						event: true,
					},
					el: {
						element: true,
					},
					elem: {
						element: true,
					},
					len: {
						length: true,
					},
					msg: {
						message: true,
					},
					num: {
						number: true,
					},
					obj: {
						object: true,
					},
					opts: {
						options: true,
					},
					param: {
						parameter: true,
					},
					params: {
						parameters: true,
					},
					prev: {
						previous: true,
					},
					req: {
						request: true,
					},
					res: {
						response: true,
						result: true,
					},
					ret: {
						returnValue: true,
					},
					str: {
						string: true,
					},
					temp: {
						temporary: true,
					},
					tmp: {
						temporary: true,
					},
					val: {
						value: true,
					},
					err: {
						error: true,
					},
				},
			},
		],
	},
};
