require.config({
	baseUrl: 'js',
	paths: {
		app: 'app',
		component: 'component',
		base: 'component/base',
		page: 'component/page',
		css: 'lib/css/css',
		server: 'server',
	}
});

require(["app/main"]);	