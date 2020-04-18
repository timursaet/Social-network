define(function() {
    'use strict';

    let user = {
        avatar : {
			photo: 'img/photos/user_photo.png' 
        },
        info: {
            id : 1,
            name: "Саетгареев Тимур",
            status: 'Хороший и общительный человек',
            birthday: '09.10.1997',
            city: 'Уфа',
            maitalStatus: 'Холост',
            education: 'БГУ',
            job: 'IT Тензор'
        },
        gallery : {
			images : ['img/photos/gallery/cat1.jpg"', 'img/photos/gallery/cat2.jpg', 'img/photos/gallery/cat3.jpg', 'img/photos/gallery/cat4.jpg']
		},
    };

    return user;
});