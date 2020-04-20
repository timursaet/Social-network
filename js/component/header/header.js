define(["server/users", "css!component/header/style.css"], (data) => {
    'use strict';
        
    let photo = data.avatar.photo;

	return `<div class="wrapper__header">
                <span class="wrapper__header_status" title="В сети">В сети</span>
                <a class="wrapper__header_edit" title="Редактировать" href="#">Редактировать</a>
                <div class="wrapper__header__avatar">
                    <img src="${photo}" class="wrapper__header__avatar_view" title="Аватар пользователя" alt="Аватар пользователя">
                </div>
            </div>`;
            
});
