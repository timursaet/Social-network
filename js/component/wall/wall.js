define([], function () {
    'use strict';
    
    let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'js/component/wall/style.css';
    document.getElementsByTagName("head")[0].appendChild(link);

	return `<div class="content__wall write">
            <div class="write">
                <div class="write__info">
                    <div class="write__info__img">
                        <img src="img/photos/user_photo.png" class="write__info__img_img" title="Аватар пользователя" alt="Аватар пользователя">
                    </div>
                    <div class="write__info__data">
                        <span class="write__info__data_name">Злотова Мария</span>
                        <span class="write__info__data_online">Сегодня в 12:33</span> 
                    </div>
                    <div class="write__info__delete">
                        <img src="img/basket.jpg" class="write__info__delete_img" alt="Удалить">
                    </div>                  
                </div>
                <div class="mess">
                        <span>Здесь какое-то сообщение</span>
                </div>
            </div>
        </div>`;
});
