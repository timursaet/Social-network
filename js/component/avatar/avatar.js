define(["server/users", "css!component/avatar/style.css"], (data) => {
    'use strict';

    let photo = data.avatar.photo;
    
    return ` <div class="side-Bar__avatar">
                <img src="${photo}" class="side-Bar__avatar_avatar" title="Аватар пользователя" alt="Аватар пользователя">
            </div>`;
});