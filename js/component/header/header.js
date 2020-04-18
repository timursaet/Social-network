define(["server/users"], function (data) {
    'use strict';

    let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'js/component/header/style.css';
    document.getElementsByTagName("head")[0].appendChild(link);
        
    let photo = data.avatar.photo;

	return `<div class="wrapper__header">
                <span class="wrapper__header_status" title="В сети">В сети</span>
                <a class="wrapper__header_edit" title="Редактировать" href="#">Редактировать</a>
                <div class="wrapper__header__avatar">
                    <img src="${photo}" class="wrapper__header__avatar_view" title="Аватар пользователя" alt="Аватар пользователя">
                </div>
            </div>`;
});
