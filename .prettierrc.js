module.exports = {
	bracketSameLine: false,
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	/**
	 * A workaround for pnpm. If you are using yarn or npm, you can remove this line.
	 */
	plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	overrides: [
		{
			files: ['apps/**/*.[jt]s?(x)'],
			options: {
				importOrder: [
					'^stores/(.*)$',
					'^services/(.*)$',
					'^resolvers/(.*)$',
					'^hooks/(.*)$',
					'^helpers/(.*)$',
					'^types/(.*)$',
					'^constants/(.*)$',
					'^pages/(.*)$',
					'^components/(.*)$',
					'^[./]',
					'^assets/(.*)$',
				],
			},
		},
		{
			files: ['packages/**/*.[jt]s?(x)'],
			options: {
				importOrder: [
					'^helpers/(.*)$',
					'^constants/(.*)$',
					'^components/(.*)$',
					'^[./]',
				],
			},
		},
	],
};
