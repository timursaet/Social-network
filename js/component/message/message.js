define(function () {
    'use strict';
    
    let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'js/component/message/style.css';
    document.getElementsByTagName("head")[0].appendChild(link);

	return `<div class="side-Bar__mess">
                <p class="side-Bar__mess_title">Сообщения</p>
                <div class="side-Bar__mess__message">
                    <div class="side-Bar__mess__message__photo">
                        <img src="img/photos/user_photo.png" class="side-Bar__mess__message__photo_view" alt="Ава пользователя">
                    </div>
                    <div class="side-Bar__mess__message__data">
                        <span class="side-Bar__mess__message__data_name">Маша Иванова</span>
                        <span class="side-Bar__mess__message__data_mess">Здесь сообщение</span>
                    </div>
                </div>
            </div>`;
});
