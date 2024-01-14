/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: ['mongoose']
	},
	typescript: {
		ignoreBuildErrors: true
	}
}

module.exports = nextConfig
