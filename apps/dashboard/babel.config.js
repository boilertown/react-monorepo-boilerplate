module.exports = {
	presets: [
		['@babel/preset-typescript'],
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
				corejs: '3.23',
			},
		],
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
	plugins: ['@babel/plugin-transform-runtime'],
};
