const withTM = require('next-transpile-modules')(['@boilertowns-example/ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = withTM(nextConfig);
