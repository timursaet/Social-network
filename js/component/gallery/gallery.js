define(["server/users", "css!component/gallery/style.css"], (data) => {
	
	let photos = data.gallery.images, photo = '';
	photos.forEach((item) => {
		photo += `<img src="${item}" class="content__data__gallery_view" alt="cat1.jpg">`;	
	})

	return `<div class="content__data__gallery">
               ${photo}
            </div>`;
});