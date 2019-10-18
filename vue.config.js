const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: './',
	devServer: {
		// host: 'https://crm-tst.service.leaplearner.com/',
		// port: 8080,
		proxy: 'https://crm-tst.service.leaplearner.com/'
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('src', resolve('src'))
			.set('common', resolve('src/common'))
			.set('components', resolve('src/components'));
	}
}
