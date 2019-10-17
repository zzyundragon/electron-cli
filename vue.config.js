const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: './',
	devServer: {
		host: '127.0.0.1',
		port: 8080,
		proxy: 'http://127.0.0.1/4040'
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('src', resolve('src'))
			.set('common', resolve('src/common'))
			.set('components', resolve('src/components'));
	}
}
