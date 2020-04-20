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

require(["page/profile"], function(profile){
	document.body.innerHTML = profile;
	const cheked = document.getElementsByClassName('content__data__info__details_cheked')[0];
	const detailsInfoView = document.getElementsByClassName('content__data__info__details')[0];
	
	cheked.addEventListener('click', () => {
		detailsInfoView.style.display = 'grid';
	})
});