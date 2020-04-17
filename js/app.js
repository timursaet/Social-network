require.config({
	baseUrl: 'js',
	paths: {
		app: 'app',
		component: 'component',
		base: 'component/base',
		page: 'component/page',
		server: 'server',
	}
});

require(["page/profile"], function(Profile){
	document.body.innerHTML = Profile;
});


// "use strict";
// const avatartFilter = document.getElementsByClassName('side-Bar__avatar_ed')[0];
// const avatarPerson = document.getElementsByClassName('side-Bar__avatar')[0];
// const editAvatarPerson = document.getElementsByClassName('side-Bar__avatar_edit')[0];

// avatarPerson.onmouseover = function() {
//     avatartFilter.style.filter = 'grayscale(.75)';
//     editAvatarPerson.style.display = 'block';
// };

// avatarPerson.onmouseout = function() {
//     avatartFilter.style.filter = 'none';
//     editAvatarPerson.style.display = 'none';
// };