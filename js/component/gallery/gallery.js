define(["server/users"], function (photos) {
	
	let link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = 'js/component/gallery/style.css';
	document.getElementsByTagName("head")[0].appendChild(link);

	let items = photos.gallery.images;
	let slide = '';
	for (let i = 0; i < items.length; i++){
		slide += `<img src="${items[i]}" class="content__data__gallery_view" alt="cat1.jpg">`;
	}
	    
	return `<div class="content__data__gallery">
               ${slide}
            </div>`;
});