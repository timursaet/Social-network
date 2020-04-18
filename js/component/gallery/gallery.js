define(["server/users"], function (data) {
	
	let link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = 'js/component/gallery/style.css';
	document.getElementsByTagName("head")[0].appendChild(link);

	let photos = data.gallery.images, photo = '';
	photos.forEach((item) => {
		photo += `<img src="${item}" class="content__data__gallery_view" alt="cat1.jpg">`;	
	})

	return `<div class="content__data__gallery">
               ${photo}
            </div>`;
});