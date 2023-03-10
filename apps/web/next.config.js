const withTM = require('next-transpile-modules')(['@spacegame/ui'])

module.exports = withTM({
	reactStrictMode: true,
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(glsl|frag|vert)$/,
			use: 'raw-loader'
		})

		return config
	}
})
